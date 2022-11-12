const mongoose = require("mongoose");

const orderModel = mongoose.Schema(
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
  },
  { timestamps: true }
);

const products = mongoose.model("orders", orderModel);
module.exports = products;
