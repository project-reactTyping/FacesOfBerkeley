import React, { Component } from "react";
import Col from "../../components/Grid/Col";
import Row from "../../components/Grid/Row";
import Nav from '../../components/Nav';
import SideBar from '../../components/SideBar';
import UserProfile from '../../components/UserProfile';
import MyPost from '../../components/MyPost';

import "./Profile.css";

class Profile extends Component {

  componentDidMount() {
    this.loadUsers();
  }

  loadUsers = () => {

  };

  render() {
    return (
      <div className="container container-user">
        <div className="nav">
          <Nav />
        </div>
        <div className="userBody">
          <Row>
          <Col xs={6} size='md-3' md={3}>
            <SideBar />
          </Col>
          <Col xs={12} size="md-9" md={9}>
          <UserProfile />
          <MyPost />
          </Col>
          </Row>
        </div>
    </div>
    );
  }
}

export default Profile;