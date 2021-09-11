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
  customers: {
    type: [
      {
        customerMail: String,
        bid: Number,
        comment: String,
      },
    ],
  },
  status: {
    type: String,
    enum: ["posted", "pending", "finalized"],
    required: true,
  },
  minimumBid: {
    type: Number,
    required: true,
  },
  finalBid: {
    type: Number,
  },
  finalCustomer: {
    type: String,
  },
});
module.exports = Job = mongoose.model("jobs", Jobsschema);
