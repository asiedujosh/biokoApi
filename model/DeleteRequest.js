const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DeleteRequest = new Schema({
  username: {
    type: String,
  },
  reason: {
    type: String,
  },
});

const DeleteRequestModel = mongoose.model("DeleteRequestModel", DeleteRequest);
module.exports = DeleteRequestModel;
