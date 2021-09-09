const mongoose=require('mongoose')
const workerschema=mongoose.Schema({
    name:{
        type:String,
        required: true
    }
})
mongoose.model('worker',workerschema)