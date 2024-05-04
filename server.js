const express = require("express");
const app = express();

const usersRoute = require("./routes/users");
const productsRoute = require("./routes/products");

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.use("/users", usersRoute);
app.use("/products", productsRoute);

const port = process.env.port || 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
