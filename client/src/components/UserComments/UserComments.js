import React from "react";
import "./UserComments.css";
import axios from 'axios';

class UserComments  extends React.Component {
     constructor(props) {
     	super(props);
     	this.state = {
     		error: '',
     		comments: ''
     	};
     }
     handleSubmit = (event) => {
     	event.preventDefault();
     	let comments = this.state.comments.trim();

     	axios.post('/', { comments: comments})
     	.then((result) => {
     		console.log(result.data);
     	});
     	return UserComments;
     }
     handleCommentChange = (event) => {
     	this.setState({post: event.target.value});
     	console.log(event);
     }
     render() {
     	return (
     		<div>
     		  <form handleSubmit={this.handleSubmit}>
     		  <input className="comments" value={this.state.comments} handleCommentChange={this.handleCommentChange} />
     		  <button id="addComment">+</button>
     		  </form>
     		</div>
     		);
     }
}

export default UserComments;