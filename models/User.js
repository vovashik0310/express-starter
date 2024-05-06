const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    maxlength: [40, "Username should be under 40 characters"],
    minlength: [1, "Username should be over 1 characters"],
  },
  email: {
    type: String,
    required: [true, "Please proved an email"],
    validate: [validator.isEmail, "Invalid Email"],
    unique: true,
  },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
});

module.exports = mongoose.model("User", userSchema);
