import React from "react";
import "./MyFollowers.css";
import Post from "../../components/Post";

class MyFollowers extends React.Component {
	constructor(props) {
		super(props);
		   this.state = {
		   	   error: '',
		   	   followers: ''
		   };
	}

	render () {
		return (
			<div className="followersPost">
		   <Post />
		   </div>
		);
	}
}

export default MyFollowers;