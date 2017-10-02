import React, { Component } from 'react';

class Dashboard extends Component {
  render() {
    return (
      <div>

              <h1>Dashbaord</h1>
              <p>Welcome to the dashboard</p>

              <img src={this.props.profile.picture} alt="hello good looking!" />
              <h3>{this.props.profile.nickname}</h3>
              <strong>{this.props.profile.email}</strong>

      </div>
    );
  }
}

export default Dashboard;
