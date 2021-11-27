const mongoose = require('mongoose')
const Schema = mongoose.Schema

const VertinaryCollection = new Schema({
  drugs: {
    type: String
  },
  medication: {
    type: String
  }
})

const VertinaryCollectionModel = mongoose.model('VertinaryCollectionModel', VertinaryCollection)
module.exports = VertinaryCollectionModel
