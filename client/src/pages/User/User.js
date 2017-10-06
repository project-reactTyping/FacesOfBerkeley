import React, { Component } from "react";
import Col from "../../components/Grid/Col";
import Row from "../../components/Grid/Row";
import Nav from '../../components/Nav';
import SideBar from '../../components/SideBar';
// import PostContainer from '../../components/PostContainer';
import YouTube from '../../components/YouTube';
import Cookies from 'universal-cookie';
import MyPost from '../../components/MyPost';
import "./User.css";


class User extends Component {


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
        <div>
          <Row>
          <Col xs={6} size='md-3' md={3}>
            <SideBar />
          </Col>
          <Col xs={12} size="md-5" md={5}>
            <MyPost />
          </Col>
          <Col xs={6} size='md-4' md={4}>
            <YouTube />
          </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default User;