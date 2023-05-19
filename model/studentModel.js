const mongoose = require('mongoose');

const AutoIncrement = require('mongoose-sequence')(mongoose);

const StudentTable = new mongoose.Schema(
  {
    _id: {type: Number},
    fullname: {
      type: String,
      required: [true, 'Must enter a full name'],
      minLength: [8, 'full name should be more than 8 characters'],
      maxLength: [20, 'Full name should be less than 20 characters'],
    },
    email: {
      type: String,
      required:[true, 'email address is required'],
      unique: true,
    },
    
    password: {
      type: String,
      minLength: [8, 'Password must be more than 6 characters'],
      maxLength: [16, 'Password is too long'],
    },
    Type :{
      type:Boolean ,
      required:[true,],

    }

  },
  { _id: false }
);
StudentTable.plugin(AutoIncrement,{inc_amount:1});
const StudentModel = mongoose.model('student', StudentTable);

module.exports = StudentModel;