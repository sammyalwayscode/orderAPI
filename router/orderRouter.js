const { Router } = require("express");
const { createOrder, getOrders } = require("../controller/orderController");
const router = Router();

router.route("/").get(getOrders);
router.route("/newOrder").post(createOrder);

module.exports = router;
