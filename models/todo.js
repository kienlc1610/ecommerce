const mongoose = require("mongoose");

/* Todo Schema */

const now = new Date();
const TodoSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

const Todo = module.exports = mongoose.model('Todo', TodoSchema);


module.exports.getAll = function(callback) {
  Todo.find(callback);
};

module.exports.create = function(data, callback) {
  if(!data) {
    console.log("No data provided");
  } else {
    data.save(callback);
  }
};