const express = require("express");
const mongoose = require("mongoose");
const winston = require("winston");
require("dotenv").config();
const app = express();

const usersRoute = require("./routes/users");
const productsRoute = require("./routes/products");
const authRoutes = require("./routes/auth");
const protectedRoutes = require("./routes/protectedRoute");
const verifyToken = require("./controllers/authMiddleware");

mongoose.connect(process.env.MONGO_URI, {
  dbName: process.env.DATABASE_NAME,
  useNewUrlParser: true,
});
const con = mongoose.connection;

const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  transports: [new winston.transports.Console()],
});

app.use((req, res, next) => {
  logger.info({
    method: req.method,
    url: req.url,
    statusCode: res.statusCode,
    responseTime: Date.now() - req.startTime,
  });
  next();
});

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
