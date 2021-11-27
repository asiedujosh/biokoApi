const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Supply = new Schema({
  date: {
    type: String
  },
  products: {
    type: String
  },
  badget: {
    type: Number
  },
  status: {
    type: String
  }
})

const SupplyModel = mongoose.model('SupplyModel', Supply)
module.exports = SupplyModel
