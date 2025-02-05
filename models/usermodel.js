const mongoose=require('mongoose')



const schema=new mongoose.Schema({
    fullname:String,
    email:String,
    password:String,
    cart:[],
    orders:[],
    contact:Number,
    picture:String

})

const model=mongoose.model("user",schema)

module.exports=model