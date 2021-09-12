const jobsrouter = require("express").Router();
const {
  getAllJobs,
  addNewJob,
  getJob,
  bookJob,
  acceptBid,
  addSkill,
  addRating,
  getRating,
  getallworkers,
} = require("../Controllers/Jobs");

jobsrouter.get("/allworkers",getallworkers)
jobsrouter.get("/jobs", getAllJobs);
jobsrouter.post("/job", getJob);
jobsrouter.post("/newjob", addNewJob);
jobsrouter.patch("/book", bookJob);
jobsrouter.patch("/accept", acceptBid);
jobsrouter.patch("/addskill", addSkill);
jobsrouter.patch("/addrating", addRating);
jobsrouter.post("/getrating", getRating);

module.exports = jobsrouter;
