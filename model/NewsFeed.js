const mongoose = require('mongoose')
const Schema = mongoose.Schema

const NewsFeed = new Schema({
  title: {
    type: String
  },
  news: {
    type: String
  }
})

const NewsFeedModel = mongoose.model('NewsFeedModel', NewsFeed)
module.exports = NewsFeedModel
