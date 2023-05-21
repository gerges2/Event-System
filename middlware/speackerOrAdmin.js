const jwt = require("jsonwebtoken");
const Speaker = require("../model/SpeakerModel");


const config = process.env;
const verifyToken = async(req, res, next) => {
  const token =
    req.body.token || req.query.token || req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    const decoded = jwt.verify(token, config.TOKEN_KEY);
    req.user = decoded;// Type and gmail
    
    // findById(req.params.id)
    const respons= await Speaker.find({_id:req.params.id});
    console.log(respons[0]._id==req.params.id)    

    if (req.user.Type==false ||respons[0]._id!=req.params.id){
    return res.status(403).send("A token is required for authentication");}

    //  console.log(req.user);
    

  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};

module.exports = verifyToken;