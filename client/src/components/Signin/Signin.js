import React from "react";
import "./Signin.css";
import axios from 'axios';
import { Redirect } from 'react-router';
import Cookies from 'universal-cookie';


class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: '',
      redirect: false
    };
  }

  onSubmit = (e) => {
    e.preventDefault();

    let email = this.refs.email.value.trim();
    let password = this.refs.password.value.trim();
    let realThis = this;
    axios.get('/api/user', {
      params: {
        email: email,
        password: password
      }
    })
    .then(function (response) {
      realThis.setState({ redirect: true })
      const cookies = new Cookies();
      cookies.set('currentUser', response.data[0]);
      console.log(cookies.get('currentUser'));
    })
    .catch(function (error) {
      console.log(error);
    });
    email = '';
    password = '';
  }

  render() {
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to='/user'/>;
    }
    return (
      <div className="boxed-view">
        <div className="boxed-view__box">
          <h2>Login</h2>

          {this.state.error ? <p>{this.state.error}</p> : undefined}


          <form onSubmit={this.onSubmit} className="boxed-view__form">
            <div>
              <input type="email" ref="email" name="email" placeholder="Email"/>
            </div>
            <div>
              <input type="password" ref="password" name="password" placeholder="Password"/>
            </div>
            <br />
            <div>
              <input id="loginBtn" type="submit" value="Log In"/>
            </div>
              <br />
              <a href="/signup">Need an Account?</a>
          </form>
        </div>
      </div>
    );
  }
}


export default Signin;