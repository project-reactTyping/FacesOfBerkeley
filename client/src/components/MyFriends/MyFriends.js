import React from "react";
import Post from '../../components/Post';
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
      <div className="friendPost">
      <Post />
      </div>
    );
  }
}


export default MyFriends;