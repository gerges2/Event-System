
const express= require ("express");
require("dotenv").config();
const router=express.Router();
const helper=require("../healper/speakerHealper")
const bcrypt= require ("bcrypt");
const User = require("../model/user");// for database
const jwt=require("jsonwebtoken");
const { body, validationResult } = require('express-validator');




router.get('/',(req, res) => {
  helper.getting(res)
});

router.get('/:id',(req, res) => {
  const {id} =req.params
  helper.gettingbyId (id,res)

});

router.post('/',[

  body('email').isEmail(),
  body('password').isLength({ minLength: 8 }),
  body('fullname').isLength({ min: 8 }),
],(req, res) => { 

  if(errors.isEmpty()){
    helper.creation(req.body,res)
    }
      else{
      return res.json(errors) 
    }
});

router.put( '/:id',
(req, res) => {
  const {id} =req.params
  const data= req.body
  helper.edit(id,data,res)
});
router.delete('/:id', (req, res) => {
  const {id} =req.params
    helper.remove(id,res)
});
router.delete('/', (req, res) => {// to test only
  res.send("delet all speaker");
});





// const auth = require("../middlware/auth");

// router.get("/welcome", auth, (req, res) => {
  // res.status(200).send("Welcome 🙌 ");
// });

module.exports = router
