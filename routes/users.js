const express=require('express')
const userRouter=express.Router()

userRouter.get('/',(req,res)=>{
    res.send("user route hai bhai ")
})



module.exports=userRouter