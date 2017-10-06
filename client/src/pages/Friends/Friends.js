import React, { Component } from "react";
import Col from "../../components/Grid/Col";
import Row from "../../components/Grid/Row";
import Nav from '../../components/Nav';
import SideBar from '../../components/SideBar';
// import NameBar from '../../components/NameBar';
// import UnFriend from '../../components/UnFriend';
import Cookies from 'universal-cookie';
import MyFriends from '../../components/MyFriends';
import "./Friends.css";



class Friends extends Component {

  componentDidMount() {
    this.loadUsers();
  }

  loadUsers = () => {

  };
  componentWillMount() {
    const cookies = new Cookies();
    console.log(cookies.get('currentUser'));

  }
  render() {
    return (
      <div className="container container-user">
        <div className="nav">
          <Nav />
        </div>
        <div className="body">
          <Row>
          <Col xs={6} size='md-3' md={3}>
            <SideBar />
          </Col>
          <Col xs={12} size="md-9" md={9}>
            <MyFriends />
          </Col>
          </Row>
        </div>
    </div>
    );
  }
}

export default Friends;