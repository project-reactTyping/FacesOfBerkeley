import React from "react";
import "./MyProfile.css";

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