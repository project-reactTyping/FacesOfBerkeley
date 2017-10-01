import React, { Component } from 'react';
import Auth0Lock from 'auth0-lock';
import {Grid, Row, Col} from 'react-bootstrap';
import Header from '../../components/Header';
import Home from '../../components/Home';
import Dashboard from '../../components/Dashboard';

class OAuth extends Component {
  constructor(){
    super();
    this.state = {
      idToken:'',
      profile:{}
    }
  }

  static defaultProps = {
    clientId: 'i_nOtEiNtAVIQHDgfqmfUm-bSRJjpXIH',
    domain:'facesofberkeley.auth0.com'
  }

  componentWillMount(){
    this.lock = new Auth0Lock(this.props.clientId, this.props.domain);

    // On authentication
    this.lock.on('authenticated', (authResult) => {
      this.lock.getProfile(authResult.idToken, (error, profile) => {
        if(error){
          console.log(error);
          return;
        }

        this.setData(authResult.idToken, profile);
      });
    });

    this.getData();
  }

  // Set token & profile data
  setData(idToken, profile){
    localStorage.setItem('idToken', idToken);
    localStorage.setItem('profile', JSON.stringify(profile));
    this.setState({
      idToken: localStorage.getItem('idToken'),
      profile: JSON.parse(localStorage.getItem('profile'))
    });
  }

  // Check for token and get profile data
  getData(){
    if(localStorage.getItem('idToken') != null){
      this.setState({
        idToken: localStorage.getItem('idToken'),
        profile: JSON.parse(localStorage.getItem('profile'))
      }, () => {
        console.log(this.state);
      });
    }
  }

  showLock(){
    this.lock.show();
  }

  logout(){
    this.setState({
      idToken:'',
      profile:''
    }, () => {
      localStorage.removeItem('idToken');
      localStorage.removeItem('profile');
    });
  }

  render() {
    let page;
    if(this.state.idToken){
      page = <Dashboard
                lock={this.lock}
                idToken={this.state.idToken}
                profile={this.state.profile}
             />
    } else {
      page = <Home />
    }
    return (
      <div className="OAuth">
        <Header
          lock={this.lock}
          idToken={this.state.idToken}
          profile={this.state.profile}
          onLogoutClick={this.logout.bind(this)}
          onLoginClick={this.showLock.bind(this)}
        />
        <Grid>
          <Row>
            <Col xs={12} md={12}>
              {page}
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default OAuth;
