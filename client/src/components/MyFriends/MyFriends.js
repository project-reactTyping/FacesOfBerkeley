import React from "react";
// import Post from '../../components/Post';
import NameBar from '../../components/NameBar';
import UnFriend from '../../components/UnFriend';
import './MyFriends.css';

class MyFriends extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: '',
      message: 'can u see me?'
    };
  }

  render() {
    return (
      <div className="friendList">
      <NameBar />
      <UnFriend />
      </div>
    );
  }
}


export default MyFriends;