const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Order = new Schema({
  id: {
    type: String,
  },
  title: {
    type: String,
  },
  quantity: {
    type: Number,
  },
  qtyPrice: {
    type: Number,
  },
  price: {
    type: Number,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
});

const Orders = new Schema({
  orderNo: {
    type: String,
  },
  date: {
    type: String,
  },
  user: {
    type: String,
  },
  phoneNo: {
    type: String,
  },
  location: {
    type: String,
  },
  orders: [Order],
  status: {
    type: String,
  },
  totalPrice: {
    type: String,
  },
});

const OrdersModel = mongoose.model("OrdersModel", Orders);
module.exports = OrdersModel;
