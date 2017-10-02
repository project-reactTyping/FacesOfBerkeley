import React, { Component } from "react";
import LogOut from "../../components/LogOut";
import SearchBar from "../../components/SearchBar";
import Col from "../../components/Grid/Col";
import NavLinks from '../../components/NavLinks';
import Post from '../../components/Post';
import SideBar from '../../components/SideBar';
import MyProfile from '../../components/MyProfile';
import "./Profile.css";

class Profile extends Component {

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

        <Col xs={6} size='md-4' md={4}>
          <SideBar />
        </Col>

        <Col xs={12} size="md-8" md={8}>
          <MyProfile />
        </Col>

    </div>



    );
  }
}

export default Profile;