const Job = require("../Models/Job");

exports.getAllJobs = async (req, res) => {
  const jobs = await Job.find({ status: true });
  res.send(jobs);
};

exports.addNewJob = async (req, res) => {
  const jobDetails = req.body;
  const newJob = new Job({
    title: jobDetails.title,
    workerMail: jobDetails.workerMail,
    status: true,
    minimumBid: jobDetails.minimumBid,
  });
  newJob
    .save()
    .then(() => {
      res.send("Job added successfully");
    })
    .catch((err) =>
      res.status(404).send("Something went wrong. Can't add job")
    );
};

exports.getJob = async (req, res) => {
  const id = req.body.id;
  const job = await Job.findById(id);
  res.send(job);
};
