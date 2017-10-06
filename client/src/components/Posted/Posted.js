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

	handleSubmit = (event) => {
		event.preventDefault();
		let post = this.state.post.trim();
        let comments = this.state.comments.trim();

        axios.get('/post', {post: post})
        axios.get('/comments', {comments:comments})
          .then((result) => {
          	console.log(result.data);
          });
	}

	onChange = (event) => {
		this.setState({post: event.target.value});
		this.setState({comments: event.taget.value});
		console.log(event);
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