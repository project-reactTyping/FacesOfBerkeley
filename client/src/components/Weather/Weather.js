
import React from 'react';
//import 'bootstrap/dist/css/bootstrap.css';
//import 'bootstrap/dist/css/bootstrap-theme.css';
import "./Weather.css";
//import { WeatherApi } from './API/api.js';


class Weather extends React.Component {
	constructor() {
		super();
	}
	get city() {
		return 'San Francisco';
	}

	get temp() {
		return '95 Degrees';
	}

	render() {
	  return (

	
  		<div className="weather">
		  	<p><strong>City: </strong>{this.city}</p>
		  	<p><strong>Current Temperature: </strong>{this.temp}</p>
		  	<img src="https://support.apple.com/library/content/dam/edam/applecare/images/en_US/iOS/ios10-weather-app-icon.png" />
 
	  	</div>
	  	);
	}
}
export default Weather;