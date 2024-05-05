const express = require("express");
const app = express();

const usersRoute = require("./routes/users");
const productsRoute = require("./routes/products");
const authRoutes = require("./routes/auth");
const protectedRoutes = require("./routes/protectedRoute");

const verifyToken = require("./controllers/authMiddleware");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.use("/users", verifyToken, usersRoute);
app.use("/products", productsRoute);
app.use("/auth", authRoutes);

const port = process.env.port || 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
