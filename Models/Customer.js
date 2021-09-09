const mongoose=require('mongoose')
const customerschema=mongoose.Schema({
    name:{
        type:String,
        required: true
    }
})
mongoose.model('customer',customerschema)