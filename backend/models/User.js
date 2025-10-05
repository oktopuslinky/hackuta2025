const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const chatSchema = new mongoose.Schema({
  chatId: {
    type: String,
    default: uuidv4,
    unique: true,
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
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  uid: {
    type: String,
    default: uuidv4,
    unique: true,
  },
  chats: [chatSchema],
});

module.exports = mongoose.model('User', userSchema);