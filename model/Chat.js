const mongoose = require("mongoose");
//const bcrypt = require('bcryptjs')
const Schema = mongoose.Schema;

const Chat = new Schema({
  id: {
    type: Number,
  },
  user: {
    type: String,
  },
  message: {
    type: String,
  },
});

const ChatModel = mongoose.model("ChatModel", Chat);
module.exports = ChatModel;
