const authrouter = require('express').Router()

authrouter.get('/', (req, res) => {
    console.log("fuck")
    res.send("hello")
})
module.exports = authrouter