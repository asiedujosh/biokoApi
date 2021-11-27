const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EggsCollection = new Schema({
  date: {
    type: String,
  },
  week: {
    type: Number,
  },
  numberOfEggs: {
    type: Number,
  },
});

const EggsCollectionModel = mongoose.model(
  "EggsCollectionModel",
  EggsCollection
);
module.exports = EggsCollectionModel;
