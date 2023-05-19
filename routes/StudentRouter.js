const express= require ("express");
const router=express.Router();
const helper=require("../healper/studentHealber")
const { body, validationResult } = require('express-validator');



require("dotenv").config();
const bcrypt= require ("bcrypt");
const jwt=require("jsonwebtoken");

router.get('/',(req, res) => {
  helper.getting(res)
  // res.send("will return all student");

});

router.get('/:id',(req, res) => {
  const {id} =req.params
  helper.gettingbyId (id,res)

});

   
 router.post('/',[
  body('email',"this is not email").isEmail(),
  body('password' ,'this length leen 8 ').isStrongPassword({ minLength: 8 }),
  body('fullname','this length  less than 8 ').isLength({ min: 8 }),

],(req, res) => {  
const errors=validationResult(req);
  if(errors.isEmpty()){
  helper.creation(req.body,res)
  }
  else{
    return res.json(errors) 
  }
});


router.put( '/:id',
[
  body('email',"this is not email").isEmail(),
  body('password').isLength({ min: 8 }),
  body('fullname','this length  less than 8 ').isLength({ min: 8 }),

],(req, res) => {
const errors=validationResult(req);
  if(errors.isEmpty()){
  const {id} =req.params
  const data= req.body
  helper.edit(id,data,res)
    }
    else{
      return res.json(errors) 
    }
  
});
router.delete('/:id', (req, res) => {
  const {id} =req.params
  helper.remove(id,res)
});
router.delete('/', (req, res) => {// to test only

});











// router.post("/register", async(req, res) => {
//     try {
//         const { first_name, last_name, email, password } = req.body;    
//         if (!(email && password && first_name && last_name)) {return res.status(400).send("All input is required");}
//         const oldUser = await User.findOne({ email });
//         if (oldUser) {return res.status(409).send("User Already Exist. Please Login");}
//         encryptedPassword = await bcrypt.hash(password, 10);
//         const user = await User.create({
//           first_name,last_name,email: email.toLowerCase(),password: encryptedPassword});
//         res.status(201).json(user);
//       } 
//     catch (err) {
//         console.log(err);
//          }

// });

// Login


// router.post("/login", async(req, res) => {
// // our login logic goes here
// try {
//   // Get user input
//   const { email, password } = req.body;

//   // Validate user input
//   if (!(email && password)) {  return res.status(400).send("All input is required"); }
//   const user = await User.findOne({ email });

//   if (user && (await bcrypt.compare(password, user.password))) {
//     // Create token
//     const token = jwt.sign(
//       { user_id: user._id, email },
//       'shhhhh',
//       {
//         expiresIn: "2h",
//       }
//     );

//     // jwt.sign()
//     // save user token
//     user.token = token;

//     // user
//     res.status(200).json(user);
//   }
//   res.status(400).send("Invalid Credentials");
// } catch (err) {
//   console.log(err);
// }
// });



// const auth = require("../middlware/auth");

// router.get("/welcome", auth, (req, res) => {
  // res.status(200).send("Welcome 🙌 ");
// });

module.exports = router