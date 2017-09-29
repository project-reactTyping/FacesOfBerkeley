import React from "react";
import "./Post.css";
import UserPosts from "../UserPosts";
import UserComments from "../UserComments";


const Post = props => (
	<div className="post">
	 <UserPosts />
	 <UserComments />
	</div>
	);

export default Post;