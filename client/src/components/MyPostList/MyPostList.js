import React from 'react';
import './MyPostList.css';
const MyPostList = (props) => {
  return (
    <div className="">
        {
          props.posts.map((post, index) =>
          <div className="containerUserPost" key={index}>
            <p className={"myPost"+index} key={index}>{post}</p>
          </div>)
        }
    </div>
  )
};

export default MyPostList;