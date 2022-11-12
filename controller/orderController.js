const { recieveOrder } = require("../email/email");
const orderModel = require("../model/orderModel");

const getOrders = async (req, res) => {
  try {
    const getOrder = await orderModel.find();
    res.status(200).json({
      message: "Data Gotten Sucessfully",
      data: getOrder,
    });
  } catch (error) {
    res.status(404).json({
      message: "An Error Occoured",
      data: error,
    });
  }
};

const createOrder = async (req, res) => {
  try {
    const { name, email, address } = req.body;
    const newOrder = await orderModel.create({
      name,
      email,
      address,
    });
    recieveOrder(email, name)
      .then((result) => {
        console.log("Mail Sent", result);
      })
      .catch((error) => {
        console.log(error);
      });
    return res.status(201).json({
      message: "Order Sent",
      data: newOrder,
    });
  } catch (error) {
    return res.status(404).json({
      message: "An Error Occoured",
      data: error,
    });
  }
};

module.exports = { getOrders, createOrder };
