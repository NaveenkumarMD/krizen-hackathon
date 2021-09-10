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
  customerMail: {
    typer: [String],
  },
  status: {
    type: String,
    required: true,
  },
  bid: {
    type: Number,
    required: true,
  },
});
module.exports = Job = mongoose.model("jobs", Jobsschema);
