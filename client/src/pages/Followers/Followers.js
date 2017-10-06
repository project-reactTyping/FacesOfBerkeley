import React from "react";
import Row from "../../components/Grid/Row";
import Col from "../../components/Grid/Col";
import Nav from '../../components/Nav';
import SideBar from '../../components/SideBar';
import MyFollowers from '../../components/MyFollowers';
import Cookies from 'universal-cookie';
import "./Followers.css";



class Followers extends React.Component {

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
        <div className="followersBody">
        <Row>
          <Col xs={6} size='md-3' md={3}>
            <SideBar />
          </Col>
          <Col xs={12} size='md-9' md={9}>
            <MyFollowers />
          </Col>
        </Row>
        </div>
      </div>
    );
  }
}

export default Followers;