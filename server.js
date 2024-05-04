const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

const port = process.env.port || 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
