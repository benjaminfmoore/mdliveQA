const mongoose = require('mongoose');

const appSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('App', appSchema);
