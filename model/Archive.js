const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Schema = mongoose.Schema;

const ArchiveData = new Schema({
  username: {
    type: String,
  },
  role: {
    type: String,
  },
  phoneNo: {
    type: String,
  },
  location: String,
});

const ArchiveDataModel = mongoose.model("ArchiveDataModel", ArchiveData);
module.exports = ArchiveDataModel;
