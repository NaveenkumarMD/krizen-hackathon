const jobsrouter = require('express').Router()

jobsrouter.get('/jobs', (req, res) => {
    console.log("fuck")
})
module.exports = jobsrouter