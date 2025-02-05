const mongoose=require('mongoose')


const ownerschema=new mongoose.Schema({
    fullname:{
        type:String,
        minlength:3,
        trim:true
    },
    email:String,
    password:String,
    products:{
        type:Array,
        default:[]
    },
    gstin:String,
    picture:String

})

const model=mongoose.model("owner",ownerschema)

module.exports=model