import React, { Component } from "react";
import Signin from "../components/Signin";

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
        <Signin />
      </div>
    )
  };
}

export default User;