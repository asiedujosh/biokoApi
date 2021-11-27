const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const Schema = mongoose.Schema

const FeedCollection = new Schema({
  date: {
    type: String
  },
  week: {
    type: Number
  },
  quantityOfFeed: {
    type: Number
  }
})

const FeedCollectionModel = mongoose.model('FeedCollectionModel', FeedCollection)
module.exports = FeedCollectionModel
