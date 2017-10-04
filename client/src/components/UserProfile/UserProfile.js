import React from "react";
import "./UserProfile.css";
import NameBar from "../NameBar";
import AddFriendBtn from "../AddFriendBtn";
import AddFollowerBtn from "../AddFollowerBtn";

const UserProfile = props => (
	<div className="userProfile">
	<NameBar />
	<AddFriendBtn />
	<AddFollowerBtn />
	</div>
	);

export default UserProfile;