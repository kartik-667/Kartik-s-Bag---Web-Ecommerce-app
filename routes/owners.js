const express=require('express')
const ownerRouter=express.Router()

ownerRouter.get('/',(req,res)=>{
    res.send("owner route hai bhai ")
})



module.exports=ownerRouter