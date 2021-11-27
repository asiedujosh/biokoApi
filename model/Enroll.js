const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Enroll = new Schema({
  username: {
    type: String,
  },
  name: {
    type: String,
  },
  phoneNo: {
    type: String,
  },
  reason: {
    type: String,
  },
  duration: {
    type: String,
  },
});

const EnrollModel = mongoose.model("EnrollModel", Enroll);
module.exports = EnrollModel;
