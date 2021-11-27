const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ExpenditureCollection = new Schema({
  date: {
    type: String
  },
  type: {
    type: String
  },
  noOfExpenditure: {
    type: Number
  },
  quantity: {
    type: Number
  },
  amount: {
    type: Number
  },
  paymentMethod: {
    type: String
  },
  paymentStatus: {
    type: String
  },
  description: {
    type: String
  }
})

const ExpenditureCollectionModel = mongoose.model('ExpenditureCollectionModel', ExpenditureCollection)
module.exports = ExpenditureCollectionModel
