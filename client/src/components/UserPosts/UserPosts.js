import React from "react";
import "./UserPosts.css";

const UserPosts = props => (
	<div>
	<form>
	<input style={{ height: 300 }} id="post" type="text" name="post" placeholder="Speak Your Mind. Don't forget to be KIND!!!..." />
	<button type="button" name="button" id="postBtn">Post</button>
	</form>
	</div>
	);

export default UserPosts;