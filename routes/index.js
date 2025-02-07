const express=require('express')
const router=express.Router()
const isloggedin=require('../middleware/isLoggedIn')

const products=require('../models/productmodel')
router.get('/',(req,res)=>{
    let error=req.flash("error")
    res.render('index',{error})
})


router.get('/shop',isloggedin,async (req,res)=>{
    let data=await products.find()
    console.log(data);
    
    // if(data.length >0)

    res.render('shop', {products : data})
})

module.exports= router