const mongoose = require("mongoose");
const customerschema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  number: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  currentHires: {
    type: [
      {
        workerMail: String,
        service: String,
      },
    ],
  },
  previousHires: {
    type: [
      {
        workerMail: String,
        service: String,
      },
    ],
  },
});

module.exports = Customer = mongoose.model("customer", customerschema);
