import React, { Component } from "react";

class User extends Component {

  componentDidMount() {
    this.loadUsers();
  }

  loadUsers = () => {

  };

  render() {
    return (
      <div>
        <h1><center>Welcome to Faces of Berkeley!</center></h1>
      </div>
    )
  };
}

export default User;