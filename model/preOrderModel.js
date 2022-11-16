const mongoose = require("mongoose");

const preOrderModel = mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    address: {
      type: String,
    },
    orders: {
      type: Array,
    },
  },
  { timestamps: true }
);

const products = mongoose.model("preOrders", preOrderModel);
module.exports = products;
