import React from "react";
import "./Posted.css";
import UserPosts from "../../components/UserPosts";
import UserComments from "../../components/UserComments";
import axios from 'axios';

class Posted extends React.Component {
	constructor(props) {
		super(props);
		  this.state = {
		  	error: '',
		  	post: '',
		  	comments: ''
		  };
	}



	render() {
	   return (
		<div className="posted">
		  <UserPosts />
		  <UserComments />
		</div>
		);
	}

}

export default Posted;