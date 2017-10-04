import React from 'react';

const MyPostList = (props) => {
  return (
    <div className="container">
      <ul>
        {
          props.posts.map((post, index) => <li key={index}>{post}</li>)
        }
      </ul>
    </div>
  )
};

export default MyPostList;