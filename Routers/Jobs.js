const jobsrouter = require("express").Router();
const { getAllJobs, addNewJob } = require("../Controllers/Jobs");

jobsrouter.get("/jobs", getAllJobs);
jobsrouter.post("/newjob", addNewJob);
module.exports = jobsrouter;
