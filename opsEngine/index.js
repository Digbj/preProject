const express=require('express');
const mongoose=require('mongoose')
const bodyParser=require('body-parser');
const userRoute=require("./route/user")
const offerRoute=require("./route/offer")
const app=express();
app.use(bodyParser.json());




mongoose.connect("mongodb://0.0.0.0:27017/user",{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{
console.log('Connect to db')
})
.catch((err)=>{console.log('Failed to connect db'+err)})

const SERVER_PORT=process.env.PORT||8080


app.listen(SERVER_PORT,()=>{
    console.log('Server Started at '+SERVER_PORT)
})


app.use('/user',userRoute);
app.use("/offer",offerRoute)
