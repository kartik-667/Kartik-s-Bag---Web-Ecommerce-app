const mongoose=require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/bag_shop').then(()=>{
    console.log('mongo connection successful');
    
}).catch(()=>{
    console.log('connection failed');
    
})

module.exports=mongoose.connection;