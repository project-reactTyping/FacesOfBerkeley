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
          <Col xs={6} size='md-4' md={4}>
          <SideBar />
          </Col>
          <Col xs={12} size="md-8" md={8}>
          <PostContainer />

          </Col>
          </Row>
        </div>
      </div>
    )
  }
}

export default Nav;