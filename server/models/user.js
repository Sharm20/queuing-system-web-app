const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Fill in everything"],
  },

  email: {
    type: String,
    required: [true, "Fill in everything"],
  },

  dob: {
    type: Date,
    required: [true, "fill in everything"],
  },

  password: {
    type: String,
    required: [true, "Fill in everything"],
  },
});

const User = new mongoose.model("User", userSchema);
module.exports = User;