const mongoose = require('mongoose');

const speakerTable = new mongoose.Schema({
  Fullname: {
    type: String,
    required: [true, 'Must enter a full name'],
    minLength: [8, ],
    maxLength: [60, ],
  },
    password: {
    type: String,
    minLength: [8, 'Password must be more than 8 characters'],
    maxLength: [25, 'Password is too long'],
  },
  email: {
    type: String,
    unique: [true],
    required: true,
  },


  image: {
    type: String,
  },
});

const SpeakerModel = mongoose.model('speaker', speakerTable);

module.exports = SpeakerModel;

