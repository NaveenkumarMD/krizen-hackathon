const mongoose = require("mongoose");
const {ObjectId} =mongoose.Schema.Types
const Jobsschema = mongoose.Schema({
  customerId:{
    type:ObjectId,
    required: true,
  },
  workerId:{
    type:ObjectId,
    required: true,
  },
  status:{
    type:String,
  },
  minimumbid:{
    type:Number,
  },
  location:{
    type:String,
  },
  time:{
    type:String
  }
});
module.exports = Job = mongoose.model("jobs", Jobsschema);
