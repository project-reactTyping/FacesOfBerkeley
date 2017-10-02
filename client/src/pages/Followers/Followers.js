import React, { Component } from "react";
import LogOut from "../../components/LogOut";
import SearchBar from "../../components/SearchBar";
import Col from "../../components/Grid/Col";
import NavLinks from '../../components/NavLinks';
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
      <div>
        <div className="nav">
          <SearchBar />
          <NavLinks text="Home" />
          <NavLinks className="friends" text="Friends" />
          <NavLinks text="Followers" />
          <NavLinks text="Profile" />
          <LogOut />
        </div>

        <Col xs={6} size='md-4' md={4}>
          <SideBar />
        </Col>

        <Col xs={12} size='md-8' md={8}>
          <MyFollowers />
        </Col>
    </div>



    );
  }
}

export default Followers;