import React from "react";
import "./UserComments.css";

const UserComments = props => (
	<form>
	<input id="comment" type="text" name="comment" placeholder="Add a comment. Don't forget to be KIND!!!..." />
	<button type="submit" name="submit" id="addComment">+</button>
	</form>
	);

export default UserComments;