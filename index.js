const express=require('express')
const app=express()
const mongoose=require('mongoose')
const cors=require('cors')
require('dotenv').config()
//Middlewares
app.use(express.json())
app.use(cors())

const port=2000 || process.env.PORT

mongoose.connect(process.env.MONGODB_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
mongoose.connection.on('connected',()=>{
    console.log("Connected to mongodb")
})
mongoose.connection.on('error',()=>{
    console.log("Connection failed")
})
//Models
require('./Models/Customer')
require('./Models/Job')
require('./Models/Workerschema')

//Routers

app.use(require('./Routers/Auth'))
app.use(require('./Routers/Jobs'))

app.listen(port,()=>{
    console.log("Server listening at ",port)
})