const cookieParser = require('cookie-parser');
const express=require('express')
const path=require('path')
const app=express()
const db=require('./config/mongoose-connection')
require('dotenv').config();
const userRouter=require('./routes/users.js')
const productRouter=require('./routes/products.js')
const ownerRouter=require('./routes/owners.js')


app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
app.use(express.static(path.join(__dirname,"public")))
app.set('view engine','ejs')


app.use('/owners',ownerRouter)
app.use('/users',userRouter)
app.use('/products',productRouter)

app.get('/',(req,res)=>{
    res.send("this is home page")
    
})

app.listen(process.env.PORT,()=>{
    console.log(`listening on port ${process.env.PORT}`);
    
})






