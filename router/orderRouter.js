const { Router } = require("express");
const {
  createOrder,
  getOrders,
  createPreOrder,
  getPreOrders,
} = require("../controller/orderController");
const router = Router();

router.route("/").get(getOrders);
router.route("/newOrder").post(createOrder);
router.route("/preOrder").post(createPreOrder);
router.route("/preOrders").get(getPreOrders);

module.exports = router;
