const express=require('express')
const ownerRouter=express.Router()
const ownerModel=require('../models/ownermodel')

ownerRouter.get('/',(req,res)=>{
    res.send("owner route hai bhai ")
})


ownerRouter.get('/showowner',async (req,res)=>{
    let data=await ownerModel.find();
    res.json(data)
})

ownerRouter.post('/create',async (req,res)=>{
    
    // res.send('create route working fine')
    let prevowner=await ownerModel.find()
    if(prevowner.length >0){
        res.status(500).send("owner already exist")  
    }else{

        let {fullname,email,password}=req.body
        let newowner=await ownerModel.create({
            fullname,
            email,
            password
        })
        if(newowner){
            res.json(newowner)
        }else{
            res.json("owner couldnt be created")
        }
    }


    
})

ownerRouter.get('/admin',(req,res)=>{
    res.render('createproducts', { success: req.flash('success') || '' });
})


module.exports=ownerRouter