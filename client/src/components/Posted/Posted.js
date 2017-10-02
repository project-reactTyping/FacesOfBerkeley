import React from "react";
import "./Posted.css";
import UserPosts from "../../components/UserPosts";
import PostBtn from "../../components/PostBtn";
import UserComments from "../../components/UserComments";


const Posted = props => (
	<div className="posted">
	  <UserPosts />
	  <PostBtn />
	  <UserComments />
	</div>
	);

export default Posted;