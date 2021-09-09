const mongoose = require("mongoose");
const Jobsschema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  workerMail: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    required: true,
  },
  minimumBid: {
    type: Number,
    required: true,
  },
});
module.exports = Job = mongoose.model("jobs", Jobsschema);
