import React from "react";
import "./MyFollowers.css";
// import Post from "../../components/Post";
import NameBar from '../../components/NameBar';
import UnFollow from '../../components/UnFollow';

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
			<div className="followersList">
			   <NameBar />
			   <UnFollow />
		   </div>
		);
	}
}

export default MyFollowers;