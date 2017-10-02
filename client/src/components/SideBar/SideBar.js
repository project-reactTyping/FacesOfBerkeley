import React from "react";
import "./SideBar.css";
import ToDo from "../ToDo";
import Weather from "../Weather";
import Calendar from "../Calendar";

const SideBar = props => (
	<div className="sidebar">
	<Weather />
	<Calendar />
	<ToDo />
	</div>
	);

export default SideBar;