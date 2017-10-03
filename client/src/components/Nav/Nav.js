import React from 'react';
import NavLinks from '../../components/NavLinks';
import SearchBar from '../../components/SearchBar';
import LogOut from '../../components/LogOut';
import PostContainer from '../../components/PostContainer';
import Col from "../../components/Grid/Col";
import Row from "../../components/Grid/Row";
import SideBar from '../../components/SideBar';


import './Nav.css';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div className="container">
        <div className="container-nav">
          <SearchBar />
          <NavLinks text="Home" />
          <NavLinks text="Friends" />
          <NavLinks text="Followers" />
          <NavLinks text="Profile" />
          <LogOut />
        </div>
        <div>
          <Row>
          <Col xs={4} size='md-3' md={3}>
            <SideBar />
          </Col>
          <Col xs={8} size="md-6" md={6}>
            <PostContainer />
          </Col>
          <Col xs={4} size='md-3' md={3}>
            <SideBar />
          </Col>
          </Row>
        </div>
      </div>
    )
  }
}

export default Nav;