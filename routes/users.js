const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("This is user route");
});

router.get("/101", (req, res) => {
  res.send("this is user 101 route"); // this gets executed when user visit http://localhost:3000/user/101
});

router.get("/102", (req, res) => {
  res.send("this is user 102 route"); // this gets executed when user visit http://localhost:3000/user/102
});

module.exports = router;
