import React from "react";
import "./MyFollowers.css";
import NameBar from '../../components/NameBar';

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
		   </div>
		);
	}
}

export default MyFollowers;