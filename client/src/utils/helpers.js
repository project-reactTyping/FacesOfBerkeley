import axios from 'axios';

const helpers = {
  // Gets all user
  getUsers: function() {
    return axios.get("/api/user")
      .then(function(results) {
        console.log('axios results', results);
        return results;
      });
  },
  // Gets the user with the given id
  getUser: function(id) {
    return axios.get("/api/user/" + id)
      .then(function(results) {
        console.log('axios results', results);
        return results;
      });
  },
  // Deletes the user with the given id
  deleteUser: function(id) {
    return axios.delete("/api/user/" + id);
  },
  // Saves a user to the database
  saveUser: function(first_name, last_name, email, password) {
    var newUser = {first_name, last_name, email, password};
    console.log('user saved',first_name );
    return axios.post("/api/user", newUser)
      .then(function(response) {
        console.log('axios results', response.data._id);
        return response.data._id;
      });
  },


  // Gets all post
  getPosts: function() {
    return axios.get("/api/post")
      .then(function(results) {
        console.log('axios results', results);
        return results;
      });
  },
  // Gets the post with the given id
  getPost: function(id) {
    return axios.get("/api/post/" + id)
      .then(function(results) {
        console.log('axios results', results);
        return results;
      });
  },
  // Deletes the post with the given id
  deletePost: function(id) {
    return axios.delete("/api/post/" + id);
  },
  // Saves a post to the database
  savePost: function(post) {
    var newpost = {post};
    console.log(post);
    return axios.post("/api/post", newpost)
      .then(function(response) {
        console.log('axios results', response.data._id);
        return response.data._id;
      });
  },

  // Gets all todo
  getTodos: function() {
    return axios.get("/api/todo")
      .then(function(results) {
        console.log('axios results', results);
        return results;
      });
  },
  // Gets the todo with the given id
  getTodo: function(id) {
    return axios.get("/api/todo/" + id)
      .then(function(results) {
        console.log('axios results', results);
        return results;
      });
  },
  // Deletes the todo with the given id
  deleteTodo: function(id) {
    return axios.delete("/api/todo/" + id);
  },
  // Saves a todo to the database
  saveTodo: function(todo) {
    var newTodo = {todo};
    console.log('todo saved' );
    return axios.post("/api/todo", newTodo)
      .then(function(response) {
        console.log('axios results', response.data._id);
        return response.data._id;
    });

  }
}

export default helpers;