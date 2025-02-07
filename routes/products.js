const express=require('express')
const productRouter=express.Router()
const upload=require('../config/multer-config')
const productmodel=require('../models/productmodel')

productRouter.get('/',(req,res)=>{
    res.send("product route hai bhai ")
})

productRouter.post('/create', upload.single('image'),async (req,res)=>{

    try {

        let {name,price,discount,bgcolor,panelcolor,textcolor}=req.body

        let data=await productmodel.create({
            image:req.file.buffer,
            name,
            price,discount,
            bgcolor,
            panelcolor,
            textcolor
    
        })
        res.redirect('/owners/admin')
        
    } catch (error) {
        res.send(error.message)
        
    }
    // res.send(req.file)
   


})



module.exports=productRouter