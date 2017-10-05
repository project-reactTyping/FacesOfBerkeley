import React from "react";
import "./Signin.css";
import axios from 'axios';

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: ''
    };
  }

  onSubmit = (e) => {
    e.preventDefault();

    let email = this.refs.email.value.trim();
    let password = this.refs.password.value.trim();

    axios.get('/api/user', {
      params: {
        email: email,
        password: password
      }
    })
    .then(function (response) {

      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    email = '';
    password = '';
  }

  render() {
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
              <input type="submit" value="Log In"/>
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