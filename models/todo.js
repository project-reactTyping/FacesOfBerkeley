const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var todoSchema = new Schema({
  todo: String
});

var Todo = mongoose.model('todo', todoSchema);

module.exports = Todo;