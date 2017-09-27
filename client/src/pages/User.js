import React, { Component } from "react";
import Followers from "../components/Nav/NavComponents/Followers";
import Friends from "../components/Nav/NavComponents/Friends";
import LoginSignUp from "../components/Nav/NavComponents/LoginSignUp";
import SearchBar from "../components/Nav/NavComponents/SearchBar";
import Container from "../components/Nav/NavComponents/Grid/Container";
import UserBar from "../components/Nav/NavComponents/UserBar";
import Col from "../components/Nav/NavComponents/Grid/Col";
import Row from "../components/Nav/NavComponents/Grid/Row";
import Jumbotron from "../components/Nav/NavComponents/Jumbotron";
import "./User.css";



class User extends Component {

  componentDidMount() {
    this.loadUsers();
  }

  loadUsers = () => {

  };

  render() {
    return (

      <Container fluid>
       <Row>
        <Col size="md-12">
         <Jumbotron className="jumbotron">
         <SearchBar
         />
         <UserBar
         />
         <Friends
         />
         <Followers
         />
         <LoginSignUp
         />
         </Jumbotron>
         </Col>
         </Row>
         </Container>

      <div>
        <h1><center>Welcome to Faces of Berkeley!</center></h1>
      </div>

    )
  };
}

export default User;