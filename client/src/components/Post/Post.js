import React from "react";
import "./Post.css";
import PostBtn from "../../components/PostBtn";
import axios from 'axios';

class Post extends React.Component {
	constructor(props) {
		super(props);
			this.state = {
				error: '',
				post: ''
			};
		}
		handleSubmit = (event) => {
			event.preventDefault();
			let post = this.state.post.trim();

			axios.post('/post', { post: post})
				.then((result) => {
					post = post.val('');
					console.log(result.data);
				});
		}

		handlePostChange = (event) => {
			this.setState({post: event.target.value});
			console.log(event);
		}


	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit} method="post">
					<input style={{ height: 200 }} id="post" type="post" name="post" onChange={this.handlePostChange} placeholder="Speak Your Mind. Don't forget to be KIND!!!..." />
					<PostBtn />
				</form>
			</div>
		);
	}

}
export default Post;

