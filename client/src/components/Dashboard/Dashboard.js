import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Row>
            <Col xs={9} md={9}>
              <h1>Dashbaord</h1>
              <p>Welcome to the dashboard</p>
            </Col>
            <Col xs={3} md={3}>
              <img src={this.props.profile.picture} alt="hello good looking!" />
              <h3>{this.props.profile.nickname}</h3>
              <strong>{this.props.profile.email}</strong>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Dashboard;
