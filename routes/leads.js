const epxress = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const crmLeads = require('../models/lead');
const Promise = require('core-js/library/es6/promise');
const mongodb = require('mongodb');

/* Create new lead */
router.post('crms/leads', function(req, res) {
  let dbLead = {
    'name' : req.body.leadName,
  };

  if(!req) {
    return Promise.reject("Invalid input");
  } else {
    /* Continue */
  }

  return new Promise(function(resolve, reject){
    crmLeads.create(dbLead)
      .then(function (createdLead) {
        resolve(createdLead);
      })
      .catch(reject);
  });
});

/* Get all lead */
router.get('crms/leads', function (req, res) {

  return new Promise(function(resolve, reject) {
    crmLeads.find()
      .then(function (foundLeads) {
        resolve(foundLeads);
      })
      .catch(reject);
  });
});
/* Get lead by id */
/* Update a lead */
/* Delete a lead */
/* Delete group of leads */
