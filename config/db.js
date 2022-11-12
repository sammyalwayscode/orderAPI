const mongoose = require("mongoose");
require("dotenv").config();

const MONGODB_URI = process.env.MONGOOSE_URI;
// const MONGODB_URI: string = "mongodb://localhost/Bag";
mongoose.connect(MONGODB_URI);
mongoose.connection
  .on("open", () => {
    console.log("Database Connected😏");
  })
  .once("error", (error) => {
    console.log(`Error Connecting to DataBase \t ${error}`);
  });

module.exports = mongoose;
