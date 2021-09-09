const mongoose=require('mongoose')
const Jobsschema=mongoose.Schema({
    status:{
        type:Boolean,
        required: true
    }
})
mongoose.model('jobs',Jobsschema)