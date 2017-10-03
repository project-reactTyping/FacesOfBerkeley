import React from "react";
import Row from "../../components/Grid/Row";
import Col from "../../components/Grid/Col";
import Nav from '../../components/Nav';
import SideBar from '../../components/SideBar';
import MyFollowers from '../../components/MyFollowers';
import "./Followers.css";



class Followers extends React.Component {

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
        <div className="followersBody">
        <Row>
          <Col xs={6} size='md-4' md={4}>
            <SideBar />
          </Col>

          <Col xs={12} size='md-8' md={8}>
            <MyFollowers />
          </Col>
        </Row>
        </div>
      </div>



    );
  }
}

export default Followers;