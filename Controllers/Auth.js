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
      .then(async () => {
        const details = await Customer.findOne({ email: user.email });
        res.json({
          message: "Signed up customer successfully",
          id: details._id,
        });
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
      .then(async () => {
        const details = await Worker.findOne({ email: user.email });
        res.json({ message: "Signed up worker successfully", id: details._id });
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
    res.json({ message: "Signin successfull", id: dbUser._id });
  else res.status(404).send("User not found");
};

exports.workerLogin = async (req, res) => {
  const user = req.body;
  const dbUser = await Worker.findOne({ email: user.email });
  if (dbUser.password === user.password)
    res.json({ message: "Signin successfull", id: dbUser._id });
  else res.status(404).send("User not found");
};
