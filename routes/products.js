const express=require('express')
const productRouter=express.Router()

productRouter.get('/',(req,res)=>{
    res.send("product route hai bhai ")
})



module.exports=productRouter