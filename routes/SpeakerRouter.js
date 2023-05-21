const express= require ("express");
require("dotenv").config();
const router=express.Router();
const helper=require("../healper/speakerHealper")
const { body, validationResult } = require('express-validator');
const auth = require("../middlware/auth");
const auth2 = require("../middlware/speackerOrAdmin");


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
],auth,(req, res) => { 

  if(errors.isEmpty()){
    helper.creation(req.body,res)
    }
      else{
      return res.json(errors) 
    }
});

router.put( '/:id',auth2,
(req, res) => {
  const {id} =req.params
  const data= req.body
  helper.edit(id,data,res)
});
router.delete('/:id', (req, res) => {
  const {id} =req.params
    helper.remove(id,res)
});
// router.delete('/', auth,(req, res) => {// to test only
//   res.send("delet all speaker");
// });
module.exports = router
