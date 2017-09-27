const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true },
  picture: { type: String, required: false },
  friends: { type: String, required: false },
  followers: { type: String, required: false },
  calendar: { type: String, required: false },
  todo: { type: String, required: false },
  date: { type: Date, default: Date.now }
});

const User = mongoose.model("User", userSchema);

module.exports = User;

