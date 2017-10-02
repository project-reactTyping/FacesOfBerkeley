import React, { Component } from "react";
import LogOut from "../../components/LogOut";
import SearchBar from "../../components/SearchBar";
// import Container from "../components/Grid/Container";
// import UserBar from "../components/Nav/NavComponents/UserBar";
import Col from "../../components/Grid/Col";
// import Row from "../components/Grid/Row";
// import Jumbotron from "../components/Jumbotron";
import NavLinks from '../../components/NavLinks';
// import Post from '../../components/Post';
import SideBar from '../../components/SideBar';
import "./Friends.css";



class Friends extends Component {

  componentDidMount() {
    this.loadUsers();
  }

  loadUsers = () => {

  };

  render() {
    return (
      <div>

        <div className="nav">
          <SearchBar />
          <NavLinks className="friends" text="Friends" />
          <NavLinks text="Followers" />
          <NavLinks text="Profile" />
          <LogOut />
        </div>
        <Col size="md-4">
        <SideBar />
        </Col>
        <Col size="md-8">

        </Col>

    </div>



    );
  }
}

export default Friends;