import React from 'react';
import './MyPostList.css';
const MyPostList = (props) => {
  return (
    <div className="">
        {
          props.posts.map((post, index) => <div className="containerUserPost"><p key={index}>{post}</p></div>)
        }
    </div>
  )
};

export default MyPostList;