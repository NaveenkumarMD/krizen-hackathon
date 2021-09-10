const jobsrouter = require("express").Router();
const { getAllJobs, addNewJob, getJob } = require("../Controllers/Jobs");

jobsrouter.get("/jobs", getAllJobs);
jobsrouter.post("/job", getJob);
jobsrouter.post("/newjob", addNewJob);

module.exports = jobsrouter;
