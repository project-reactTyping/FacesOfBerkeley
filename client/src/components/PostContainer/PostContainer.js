import React from "react";
import "./PostContainer.css";
import Post from "../../components/Post";
import Posted from "../../components/Posted";


const PostContainer = props => (
	<div className="postContainer">
      <Post />
      <Posted />
	</div>
	);

export default PostContainer;