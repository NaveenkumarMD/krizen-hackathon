const authrouter = require("express").Router();
const {
  customerSignup,
  workerSignup,
  customerLogin,
  workerLogin,
} = require("../Controllers/Auth");

authrouter.post("/customer/signup", customerSignup);
authrouter.post("/worker/signup", workerSignup);

authrouter.post("/customer/login", customerLogin);
authrouter.post("/worker/login", workerLogin);

module.exports = authrouter;
