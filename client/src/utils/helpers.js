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
    var newUser = {first_name: first_name, last_name: last_name, email: email, password: password};
    console.log('user saved',first_name );
    return axios.post("/api/user", newUser)
      .then(function(response) {
        console.log('axios results', response.data._id);
        return response.data._id;
      });
  }
};

export default helpers;