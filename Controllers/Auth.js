const { db } = require("../Models/Customer");
const Customer = require("../Models/Customer");
const Worker = require("../Models/Workerschema");

exports.customerSignup = async (req, res) => {
  const user = req.body;
  const existingName = await Customer.findOne({ name: user.name });
  const existingEmail = await Customer.findOne({ email: user.email });
  if (existingName || existingEmail) {
    res.status(409).send("Username or email has already been taken");
  } else {
    const dbCustomer = new Customer({
      name: user.name,
      email: user.email,
      password: user.password,
      number: user.number,
      location: user.location,
    });
    dbCustomer
      .save()
      .then(() => {
        res.send("Signed up customer successfully");
      })
      .catch(() => res.status(404).send("customer signup failed"));
  }
};

exports.workerSignup = async (req, res) => {
  const user = req.body;
  const existingName = await Worker.findOne({ name: user.name });
  const existingEmail = await Worker.findOne({ email: user.email });
  if (existingName || existingEmail) {
    res.status(409).send("Username or email has already been taken");
  } else {
    const dbWorker = new Worker({
      name: user.name,
      email: user.email,
      password: user.password,
      number: user.number,
      location: user.location,
    });
    dbWorker
      .save()
      .then(() => {
        res.send("Signed up worker successfully");
      })
      .catch((err) => {
        res.status(404).send("worker signup failed");
        console.log(err);
      });
  }
};

exports.customerLogin = async (req, res) => {
  const user = req.body;
  const dbUser = await Customer.findOne({ email: user.email });
  if (dbUser.password === user.password)
    res.json({ message: "Signin successfull", userType: "Customer" });
  else res.status(404).send("User not found");
};

exports.workerLogin = async (req, res) => {
  const user = req.body;
  const dbUser = await Worker.findOne({ email: user.email });
  if (dbUser.password === user.password)
    res.json({ message: "Signin successfull", userType: "Worker" });
  else res.status(404).send("User not found");
};
