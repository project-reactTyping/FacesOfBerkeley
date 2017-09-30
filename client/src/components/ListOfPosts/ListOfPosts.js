import React from "react";
import "./ListOfPosts.css";
import UserPosts from "../UserPosts";
import UserComments from "../UserComments";




const ListOfPosts = props => (
	<div className="listOfPostsAndCommnets">
	<UserPosts />
	<UserComments />
	</div>
	);

export default ListOfPosts;

