import React from "react";
import "./MyProfile.css";
import axios from 'axios';

class MyProfile extends React.Component {
	constructor(props) {
		super(props);
		   this.state = {
		   	   error: '',
		   	   profile: ''
		   };
	}



	render () {
		return (
		   <div>
		   <p>This is your Profile</p>
		   </div>
		);
	}
}

export default MyProfile;