import axios from 'axios';

export default {
  // Gets all user
  getUsers: function() {
    return axios.get("/API/user");
  },
  // Gets the user with the given id
  getUser: function(id) {
    return axios.get("/API/user/" + id);
  },
  // Deletes the user with the given id
  deleteUser: function(id) {
    return axios.delete("/API/user/" + id);
  },
  // Saves a user to the database
  saveUser: function(userData) {
    return axios.post("/API/user", userData);
  }
};
