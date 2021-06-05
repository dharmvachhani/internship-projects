var mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  unique_id: Number,
  email: String,
  username: String,
  password: String,
  passwordConf: String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
