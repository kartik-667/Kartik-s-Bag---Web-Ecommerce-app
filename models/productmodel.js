const mongoose=require('mongoose')



const productschema=new mongoose.Schema({
    name:String,
    price:Number,
    discount:{
        type:Number,
        default:0
    },
    panelcolor:String,
    textcolor:String,
    bgcolor:String,
    image:String

})

const model=mongoose.model("product",productschema)

module.exports=model