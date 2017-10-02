import React from "react";
import "./ListOfPosts.css";
import UserPosts from "../UserPosts";
import UserComments from "../UserComments";
import PostBtn from "../PostBtn";




const ListOfPosts = props => (
	<div className="listOfPostsAndCommnets">
	<UserPosts />
	<PostBtn />
	<UserComments />
	</div>
	);

export default ListOfPosts;

