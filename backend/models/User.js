const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const chatSchema = new mongoose.Schema({
  chatId: {
    type: String,
    default: uuidv4
    
  },
  messages: [{
    role: String,
    content: String,
    timestamp: {
      type: Date,
      default: Date.now,
    },
  }],
});

const userSchema = new mongoose.Schema({
  auth0Id: {
    type: String,
    unique: true,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,

  },
  chats: [],
});

module.exports = mongoose.model('User', userSchema);