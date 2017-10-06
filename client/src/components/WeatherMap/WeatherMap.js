import React from 'react';
import './WeatherMap.css';

const API_KEY = '86e995f12c7e4ee8ffafd7b4df646ef6';

export default class Weather extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  componentDidMount() {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        this.setState({
          coordinates: pos.coords,
        });
        this.checkLocation();
      }, () => {
        this.checkLocation();
      }, options);
    }

    setInterval(() => this.checkLocation(), 10 * 60 * 1000);
  }

  checkLocation() {
    if (!this.state.coordinates) {
      fetch('https://ipinfo.io/json')
        .then(res => res.json())
        .then((ip) => {
          this.setState({
            coordinates: {
              latitude: +ip.loc.split(',')[0],
              longitude: +ip.loc.split(',')[1],
            },
          });

          this.fetchForecast();
        });
    } else {
      this.fetchForecast();
    }
  }

  fetchForecast() {
    const { coordinates } = this.state;
    const API_URL = `http://api.openweathermap.org/data/2.5/weather?units=imperial&lat=${ coordinates.latitude }&lon=${ coordinates.longitude }&appid=${ API_KEY }`;
    fetch(API_URL)
      .then(c => c.json())
      .then((forecast) => {
        console.log(forecast);
        this.setState({ forecast });
      });
  }

  renderWeather() {
    if (!this.state.forecast) {
      return (
        <div className="weather-container">
          <p>Fetching Location & Weather...</p>
        </div>
      );
    }

    const src = `http://openweathermap.org/img/w/${this.state.forecast.weather[0].icon}.png`;

    return (
      <div className="weather-container">
        <h3>Weather for { this.state.forecast.name }</h3>
        <div className="icon-container">
          <img src={src} className="icon"alt={this.state.forecast.weather[0].description} />
        </div>
        <p>Details: {this.state.forecast.weather[0].description} </p>
        <p>Current temp: { this.state.forecast.main.temp }&deg;f</p>
        <p>Forecast High: { this.state.forecast.main.temp_max }&deg;f</p>
        <p>Forecast Low: { this.state.forecast.main.temp_min }&deg;f</p>
        <p>Wind Speed: { this.state.forecast.wind.speed } km/h</p>
      </div>
    );
  }

  render() {
    return (
      <div>
        { this.renderWeather() }
      </div>
    );
  }
}


