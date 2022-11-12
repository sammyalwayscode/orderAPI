const express = require("express");
const orderRouter = require("./router/orderRouter");
require("dotenv").config();
require("./config/db");

const PORT = process.env.PORT || 3003;
const app = express();

app.set("view engine", "ejs");
app.use(express.json());
app.get("/", (req, res) => {
  return res.status(200).json("message: Server Up 🚀🚀🚀");
});

app.get("/home", (req, res) => {
  return res.render("mail");
});

app.use("/api/order", orderRouter);

app.listen(PORT, () => {
  console.log(`Listening on PORT.: ${PORT}`);
});
