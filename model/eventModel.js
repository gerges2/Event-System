const mongoose = require('mongoose');

const eventTable = new mongoose.Schema({
    Title: {
        type: String,
        minLength: [3],
      },
  
    EventDate: {
    type: Date,
  },

  mainSpeaker: {
    type: String,
    minLength: [3, 'speaker name should be more than 3 characters'],
  },

  speakers: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'speaker',
  },
  students: {
    type: Number,
    ref: 'student',
  },
});

const EventModel = mongoose.model('event', eventTable);

module.exports = EventModel;
