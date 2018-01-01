const express = require("express");
const path = require("path");
const Todo = require(("../models/todo"));
const router = express.Router();

router.get("", (req, res, next) => {
  Todo.getAll((err, todos) => {
    res.json({
      todos: todos
    })
  });
});

router.post('/create', (req,res, next) => {
  let dbTodo = new Todo({
    name: req.body.data.name,
    description: req.body.data.description
  });

  if(!dbTodo.name) {
    return res.status(400);
  } else {
    /* Continue */
  }

  Todo.create(dbTodo, (err, todo) => {
    if(err) {
      return res.json({
        err : err,
        todos : []
      });
    } else {
      return res.json({
        err : null,
        todo : todo
      });
    }
  })
});

module.exports = router;
