const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var postSchema = new Schema({
  post: {
    type: String,
    trim: true,
    required: true
  }
});

var Post = mongoose.model('post', postSchema);

module.exports = Post;