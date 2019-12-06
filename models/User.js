/* eslint-disable no-useless-escape */
const mongoose = require('mongoose');



const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    maxlength: 20,
    minlength: 5
  },
  email: {
    type: String,
    required: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 
    ]
  }
});

module.exports = mongoose.model('User', schema);
