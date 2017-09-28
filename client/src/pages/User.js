import React, { Component } from "react";
// import Followers from "../components/Nav/NavComponents/Followers";
// import Friends from "../components/Nav/NavComponents/Friends";
import LogOut from "../components/LogOut";
import SearchBar from "../components/SearchBar";
// import Container from "../components/Grid/Container";
// import UserBar from "../components/Nav/NavComponents/UserBar";
// import Col from "../components/Grid/Col";
// import Row from "../components/Grid/Row";
// import Jumbotron from "../components/Jumbotron";
import NavLinks from '../components/NavLinks';
import "./User.css";



class User extends Component {

  componentDidMount() {
    this.loadUsers();
  }

  loadUsers = () => {

  };

  render() {
    return (


      <div className="nav">
        <SearchBar />
        <NavLinks text="Friends" />
        <NavLinks text="Followers" />
        <NavLinks text="Profile" />
        <LogOut />
      </div>

    )
  };
}

export default User;