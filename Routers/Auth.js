const authrouter = require("express").Router();
const {
  customerSignup,
  workerSignup,
  customerLogin,
  workerLogin,
} = require("../Controllers/Auth");

authrouter.post("/customer/signup", customerSignup);
authrouter.post("/worker/signup", workerSignup);

authrouter.post("/customer/signin", customerLogin);
authrouter.post("/worker/signin", workerLogin);

module.exports = authrouter;
