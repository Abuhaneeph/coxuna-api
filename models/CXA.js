// models/CXA.js

const mongoose = require('mongoose');

const cxaSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
    required: true,
  },
  // Other fields representing CXA data
  // For example: satisfactionScore, feedback, etc.
});

const CXA = mongoose.model('CXA', cxaSchema);

module.exports = CXA;
