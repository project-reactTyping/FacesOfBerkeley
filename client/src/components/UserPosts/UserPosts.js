import React from "react";
import "./UserPosts.css";
import axios from 'axios';

class UserPosts extends React.Component {
	constructor(props) {
		super(props);
		   this.state = {
		   	   error: '',
		   	   post: ''
		   };
	}



render () {
	return (
	<div>
		<form>
			<input style={{ height: 200 }} id="post" type="text" name="post" placeholder="Speak Your Mind. Don't forget to be KIND!!!..." />
		</form>
	</div>
	);
}
}

export default UserPosts;