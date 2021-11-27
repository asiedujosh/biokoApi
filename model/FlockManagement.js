const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Flock = new Schema({
  breed: {
    type: String,
  },
  quantity: {
    type: String,
  },
  Img: {
    type: Buffer,
  },
  ImgType: {
    type: String,
  },
  description: {
    type: String,
  },
});

const FlocksModel = mongoose.model("FlocksModel", Flock);
module.exports = FlocksModel;
