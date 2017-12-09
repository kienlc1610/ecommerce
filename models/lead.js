const mongoose = require('mongoose');

const crmLeadSchema = mongoose.Schema({
  name : {
    type : String,
    status : String,
    description : String,
    currency : String,
    opportunity : String,
    source : String,
    sourceDescription : String,
    responsible : mongoose.Schema.Types.ObjectId
  }
});

const crmLead = module.exports = mongoose.models('crmLead', crmLeadSchema);