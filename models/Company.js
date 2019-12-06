/* eslint-disable no-useless-escape */
const mongoose = require('mongoose');

const schema = new mongoose.Schema ({
  name: {
    type: String,
    required: true,
    unique: true,
    maxlength: 50
  },
  phone: {
    type: String,
    required: true,
    maxlength: 20
  },
  website: {
    type: String,
    required: true,
    match: [
      '/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g'
    ]
  }
});

module.exports = mongoose.model('Company', schema);
