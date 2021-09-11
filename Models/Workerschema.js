const mongoose = require("mongoose");
const workerschema = mongoose.Schema({
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
  skills: {
    type: [String],
  },
  ratings: {
    type: [
      {
        rating: Number,
        comment: String,
      },
    ],
  },
});
module.exports = Worker = mongoose.model("worker", workerschema);
