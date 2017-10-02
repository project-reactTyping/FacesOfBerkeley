import React, { Component } from "react";
import LogOut from "../../components/LogOut";
import SearchBar from "../../components/SearchBar";
import Col from "../../components/Grid/Col";
import NavLinks from '../../components/NavLinks';
import SideBar from '../../components/SideBar';
import MyFriends from '../../components/MyFriends';
import "./Friends.css";



class Friends extends Component {

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
          <MyFriends />
      </div>
    );
  }
}

export default Friends;