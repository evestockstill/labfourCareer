const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  human: {
    type: Boolean,
    required: true
  },
  age: {
    type: Number,
    required: true,
    min: 0,
    max: 110
  },
  weight: {
    type: String,
    required: true,
  }
});
module.exports = mongoose.model('People', schema);
