import React from "react";
import "./SideBar.css";
import Todo from "../Todo";
import Weather from "../Weather";
import Calendar from "../Calendar";

const SideBar = props => (
	<div className="sidebar">
  	<Weather />
  	<Calendar />
  	<Todo />
	</div>
	);

export default SideBar;