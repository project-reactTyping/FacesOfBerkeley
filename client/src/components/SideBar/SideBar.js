import React from "react";
import "./SideBar.css";
// import Weather from "../Weather";
import Calendar from "../Calendar";
import ToDo from '../ToDo';
import WeatherMap from '../WeatherMap';

const SideBar = props => (
	<div className="sidebar">
  	<WeatherMap />
  	<Calendar />
    <ToDo />
	</div>
	);

export default SideBar;