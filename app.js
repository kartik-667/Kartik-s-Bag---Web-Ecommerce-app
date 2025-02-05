const cookieParser = require('cookie-parser');
const express=require('express')
const path=require('path')
const app=express()

const expresssession=require('express-session')
const flash=require('connect-flash')

const db=require('./config/mongoose-connection')
require('dotenv').config();
const userRouter=require('./routes/users.js')
const productRouter=require('./routes/products.js')
const ownerRouter=require('./routes/owners.js')
const indexRouter=require('./routes/index.js')


app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
app.use(express.static(path.join(__dirname,"public")))
app.set('view engine','ejs')
app.use(expresssession({
    resave:false,
    saveUninitialized:false,
    secret:process.env.EXPRESS_SESSION_SECRET
}))
app.use(flash())



app.use('/',indexRouter)
app.use('/owners',ownerRouter)
app.use('/users',userRouter)
app.use('/products',productRouter)

// app.get('/',(req,res)=>{
//     res.send("this is home page")
    
// })

app.listen(process.env.PORT,()=>{
    console.log(`listening on port ${process.env.PORT}`);
    
})






