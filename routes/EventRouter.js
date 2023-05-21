const express= require ("express");
require("dotenv").config();
const router=express.Router();
const helper=require("../healper/EventHealber")
const bcrypt= require ("bcrypt");
const User = require("../model/user");// for database
const jwt=require("jsonwebtoken");
const { body, validationResult } = require('express-validator');
const auth = require("../middlware/auth");

router.get('/',(req, res) => {
  helper.getting(res)

});

router.get('/:id',(req, res) => {
  const {id} =req.params
  helper.gettingbyId (id,res)

});


//Title mainSpeaker speakers  students


router.post('/',
[
  body('Title',"plz must lenth =3 or more").isLength({ min: 3 }),
  body('mainSpeaker' ,"plz must lenth =3 or more").isLength({ min: 3 }),  
],auth,(req, res) => {

  if(errors.isEmpty()){
    helper.creation(req.body,res)
    }
      else{
      return res.json(errors) 
    }
});

router.put( '/:id',
[
  body('Title',"plz must lenth =3 or more").isLength({ min: 3 }),
  body('mainSpeaker' ,"plz must lenth =3 or more").isLength({ min: 3 }),  
],auth,
(req, res) => {


  if(errors.isEmpty()){
    const {id} =req.params
    const data= req.body
    helper.edit(id,data,res)
    }
      else{
      return res.json(errors) 
    }
 
});
router.delete('/:id', auth,(req, res) => {
  const {id} =req.params
  helper.remove(id,res)
});
router.delete('/', (req, res) => {// to test only
  res.send("delet all event");
});










// const auth = require("../middlware/auth");

// router.get("/welcome", auth, (req, res) => {
  // res.status(200).send("Welcome 🙌 ");
// });

module.exports = router