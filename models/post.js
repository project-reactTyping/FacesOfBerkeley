const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var postSchema = new Schema({
  post: String
});

var Post = mongoose.model('post', postSchema);

module.exports = Post;