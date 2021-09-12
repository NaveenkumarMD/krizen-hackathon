const Job = require("../Models/Job");
const Worker = require("../Models/Workerschema");
const Customer = require("../Models/Customer");

exports.getAllJobs = async (req, res) => {
  const jobs = await Job.find({});
  res.send(jobs);
};

exports.getallworkers=async (req,res) =>{
  const workers=await Worker.find({});
  console.log(workers)
  res.send(workers)
}
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
  const workerMail = req.body.workerMail;
  const jobs = await Job.find({ email: workerMail });
  res.send(jobs);
};

exports.bookJob = async (req, res) => {
  const details = req.body;
  Job.updateOne(
    { _id: details.jobId },
    {
      status: "pending",
      $push: {
        customers: {
          customerMail: details.customerMail,
          bid: details.bid,
          comment: details.comment,
        },
      },
    }
  )
    .then((job) => {
      res.send("Bid placed successfully");
      Customer.updateOne(
        { mail: details.customerMail },
        {
          $push: {
            bookedJobId: details.jobId,
          },
        }
      )
        .then((resp) => {
          res.send("job id updated in customer doc");
        })
        .catch((err) => {
          console.log(err);
          res.status(404).send("job id updation failed");
        });
    })
    .catch((err) => {
      console.log(err);
      res.status(404).send("Bid failed");
    });
};

exports.acceptBid = (req, res) => {
  const details = req.body;
  Job.updateOne(
    { _id: details.jobId },
    {
      status: "finalized",
      finalBid: details.finalBid,
      finalCustomer: details.customerMail,
    }
  )
    .then(() => {
      res.send("Bid accepted successfully");
      Customer.updateOne(
        { email: details.customerMail },
        {
          $push: {
            acceptedJobId: details.jobId,
          },
          $pull: {
            bookedJobId: details.jobId,
          },
        }
      )
        .then((resp) => {
          res.send("Bid added to customer doc");
        })
        .catch((err) => {
          console.log(err);
          res.status(404).send("Failed to add bid to customer doc");
        });
    })
    .catch((err) => {
      console.log(err);
      res.status(404).send("Bid acceptation failed");
    });
};

exports.addSkill = (req, res) => {
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

exports.addRating = (req, res) => {
  const ratingDetails = req.body;
  Worker.updateOne(
    { email: ratingDetails.workerMail },
    {
      $push: {
        ratings: {
          rating: ratingDetails.rating,
          comment: ratingDetails.comment,
        },
      },
    }
  )
    .then((resp) => res.send("rating added successfully"))
    .catch((err) => {
      console.log(err);
      res.status(404).send("Failed to add rating");
    });
};

exports.getRating = async (req, res) => {
  const details = req.body;
  const worker = await Worker.findOne({ email: details.workerMail });
  let avg = 0,
    count = 0;
  worker.ratings.forEach((rating) => {
    avg += rating.rating;
    count++;
  });
  res.json({
    rating: (avg / count).toFixed(2),
  });
};
