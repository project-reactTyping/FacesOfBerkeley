import React from "react";
import Post from '../../components/Post';

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
      <Post />
    );
  }
}


export default MyFriends;