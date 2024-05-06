const mongoose = require("mongoose");

const connectDB = mongoose
  .connect(process.env.MONGO_URI, {
    dbName: "initial",
  })
  .then(console.log("DB Connected Successfully..."))
  .catch((err) => {
    console.log("DB Connection Failed!");
    console.error(err);
    process.exit(1);
  });

module.exports = connectDB;
