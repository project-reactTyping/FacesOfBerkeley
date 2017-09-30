import React from "react";
import "./Signin.css";
import axios from 'axios';

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: '',
      email: '',
      password: ''
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    var email = this.state.email.trim();
    var password = this.state.password.trim();

    axios.post('/login' , { email, password })
      .then((results) => {
        console.log(results);
      });
  }

  handlePasswordChange = (event) => {
    this.setState({password: event.target.value});
  }

  handleEmailChange = (event) => {
    this.setState({email: event.target.value})
  }

  render() {
    return (
      <div className="boxed-view">
        <div className="boxed-view__box">
          <h2>Login</h2>

          {this.state.error && <p>{this.state.error}</p>}

          <form onSubmit={this.handleSubmit} className="boxed-view__form" action="/login" method="post">
            <div>
              <input type="email" name="email" placeholder="Email" autoComplete="off" onChange={this.handleEmailChange}/>
            </div>
            <div>
              <input type="password" name="password" placeholder="Password" autoComplete="off" onChange={this.handlePasswordChange}/>
            </div>
            <br />
            <div>
              <input type="submit" value="Log In"/>
            </div>
              <br />
              <a href="/auth/facebook">Login with Facebook</a>
              <a href="/signup">Need an Account?</a>
          </form>
        </div>
      </div>
    );
  }
}


export default Signin;