require("dotenv").config();
const PORT=process.env.PORT 
const url =process.env.URL
const express= require ("express");
// const User = require("./model/user");

const userRouter=require("./routes/user.js");

const speakers=require("./routes/SpeakerRouter.js");
const Authentication=require("./routes/AuthenticationRouter.js");
const Student=require("./routes/StudentRouter.js");
const Event=require("./routes/EventRouter.js");
const mongoose= require("mongoose");
const app= express();
app.use(express.json())



async function connect(){
    let dat=   await mongoose.connect(url,{useNewUrlParser: true, useUnifiedTopology: true})
console.log(typeof(dat) )}
connect();

// app.use(["/user",'/users'],userRouter)



app.use(["/speakers"],speakers)
app.use(["/events"],Event)
app.use(["/students"],Student)
app.use(["/login","registerStudent"],Authentication)



app.listen(PORT,(err)=>{
if ( !err){ console.log("done listening")}
})
