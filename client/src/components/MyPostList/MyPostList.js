import React from 'react';
import './MyPostList.css';
const MyPostList = (props) => {
  return (
    <div className="">
        {
          props.posts.map((post) =>
          <div className="containerUserPost">
            <p key={post._id}>{post}</p>
          </div>)
        }
    </div>
  )
};

export default MyPostList;