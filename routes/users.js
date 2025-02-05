const express=require('express')
const userRouter=express.Router()
const usermodel=require('../models/usermodel')
const bcrypt=require('bcrypt') 
const jwt=require('jsonwebtoken')

userRouter.get('/',(req,res)=>{
    res.send("user route hai bhai ")
})

userRouter.post('/register' ,  async (req,res)=>{
    try {
        let {fullname, email, password}= req.body;
        let hashval=""

        let checkuser=await usermodel.findOne({email})
        if(checkuser){
            return res.send("user already exist with this mail, log in")
            
        } 

        bcrypt.genSalt(10,async (err,salt)=>{
            bcrypt.hash(password,salt,async (err,hash)=>{
                hashval=hash
                let data=await usermodel.create({
                    fullname:fullname,
                    email:email,
                    password:hashval
                })

                let token=jwt.sign({email, id:data._id},process.env.JWT_KEY)
                res.cookie("token",token)
                console.log(token);
                

                // console.log(hashval);
                
        
                res.send('user created successfully')

            })
        })
        

       
    
        
        
    } catch (error) {
        res.send(error.message)
        
    }
   


})

userRouter.post('/login',async (req,res)=>{

    let {email, password}=req.body

    let user=await usermodel.findOne({email})
    if(!user) return res.send("user doesnt exist")

    bcrypt.compare(password,user.password,(err,result)=>{
        if(result){
            let token=jwt.sign({email, id:user._id},process.env.JWT_KEY)
            res.cookie("token",token)
            res.redirect('/shop')
            // res.send("you can login")

        }else{
            res.status(404).send("email/ password incorrect")
        }
    })


})

userRouter.get('/logout',(req,res)=>{
    res.cookie('token',"")
    res.redirect('/')
})



module.exports=userRouter