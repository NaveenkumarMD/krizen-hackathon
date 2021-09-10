const { db } = require("../Models/Job");
const Job = require("../Models/Job");
const Worker = require("../Models/Workerschema");

exports.getAllJobs = async (req, res) => {
  const jobs = await Job.find({});
  res.send(jobs);
};

exports.addNewJob = async (req, res) => {
  const jobDetails = req.body;
  const newJob = new Job({
    title: jobDetails.title,
    workerMail: jobDetails.workerMail,
    status: jobDetails.status,
    minimumBid: jobDetails.minimumBid,
  });
  newJob
    .save()
    .then(() => {
      res.send("Job added successfully");
    })
    .catch((err) => {
      console.log(err);
      res.status(404).send("Something went wrong. Can't add job");
    });
};

exports.getJob = async (req, res) => {
  const email = req.body.email;
  const jobs = await Job.find({ email: email });
  const worker = await Worker.find({ email: email });
  res.json({
    worker: worker,
    jobs: jobs,
  });
};

exports.bookJob = async (req, res) => {
  const details = req.body;
  Job.updateOne(
    { _id: details.jobId },
    {
      status: "pending",
      $push: {
        customers: {
          mail: details.customerEmail,
          bid: details.bid,
          comment: details.comment,
        },
      },
    }
  )
    .then((job) => {
      res.send("Bid placed successfully");
    })
    .catch((err) => {
      console.log(err);
      res.status(404).send("Bid failed");
    });
};

exports.acceptBid = async (req, res) => {
  const details = req.body;
  Job.updateOne(
    { _id: details.jobId },
    {
      status: "accepted",
      finalBid: details.finalBid,
      finalCustomer: details.customerMail,
    }
  )
    .then(() => {
      res.send("Bid accepted successfully");
    })
    .catch((err) => {
      console.log(err);
      res.status(404).send("Bid acceptation failed");
    });
};

exports.addSkill = async (req, res) => {
  const details = req.body;
  Worker.updateOne(
    { email: details.workerMail },
    {
      $push: {
        skills: details.skill,
      },
    }
  )
    .then(() => res.send("skill updated succesfully"))
    .catch((err) => {
      console.log(err);
      res.status(404).send("skill updation failed");
    });
};
