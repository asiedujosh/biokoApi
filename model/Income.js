const mongoose = require('mongoose')
const Schema = mongoose.Schema

const IncomeCollection = new Schema({
  date: {
    type: String
  },
  type: {
    type: String
  },
  noOfProducts: {
    type: Number
  },
  itemUnit: {
    type: String
  },
  saleAmt: {
    type: Number
  },
  paymentMethod: {
    type: String
  },
  paymentStatus: {
    type: String
  },
  soldTo: {
    type: String
  }
})

const IncomeCollectionModel = mongoose.model('IncomeCollectionModel', IncomeCollection)
module.exports = IncomeCollectionModel
