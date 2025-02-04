const mongoose=require('mongoose')



const schema=new mongoose.Schema({
    fullname:String,
    email:String,
    password:String,
    cart:[],
    isAdmin:Boolean,
    orders:[],
    contact:Number,
    picture:String

})

const model=mongoose.model("user",schema)

module.exports=model