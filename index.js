require("dotenv").config();
const PORT=process.env.PORT 
const url =process.env.URL
const express= require ("express");
const path = require('path');
// const multer  = require('multer')
//   const userRouter=require("./routes/user.js");
const speakers=require("./routes/SpeakerRouter.js");
const Authentication=require("./routes/AuthenticationRouter.js");
const Student=require("./routes/StudentRouter.js");
const Event=require("./routes/EventRouter.js");
const mongoose= require("mongoose");
const app= express();
app.use(express.json())

app.use(express.urlencoded({ extended:false}))
async function connect(){
    let dat=   await mongoose.connect(url,{useNewUrlParser: true, useUnifiedTopology: true})
console.log(typeof(dat) )}
connect();
app.use(["/speakers"],speakers)
app.use(["/events"],Event)
app.use(["/students"],Student)
app.use(["/login","registerStudent"],Authentication)




const multer  = require('multer')
const upload = multer({ dest: 'images/' })

app.post('/upload', upload.single('url'), function (req, res) {
   console.log(req.file)
   console.log("djd")
   console.log( req.body)
   res.send("done")
});


  


app.listen(PORT,(err)=>{
if ( !err){ console.log("done listening")}
})
