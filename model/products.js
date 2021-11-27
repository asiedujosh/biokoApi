const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const Schema = mongoose.Schema

const Products = new Schema({
  title: {
    type: String
  },
  quantity: {
    type: String
  },
  qtyPrice: {
    type: String
  },
  price: {
    type: Number
  },
  Img: {
    type: Buffer
  },
  ImgType: {
    type: String
  },
  description: {
    type: String
  }
})

const ProductsModel = mongoose.model('ProductsModel', Products)
module.exports = ProductsModel
