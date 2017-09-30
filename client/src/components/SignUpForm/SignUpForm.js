import React from 'react';
import './SignUpForm.css';
import axios from 'axios';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: '',
      first_name: '',
      last_name: '',
      email: '',
      password: ''
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    var first_name = this.state.first_name.trim();
    var last_name = this.state.last_name.trim();
    var email = this.state.email.trim();
    var password = this.state.password.trim();


    axios.post('/signup', { first_name, last_name, email, password })
      .then((results) => {
        console.log(results);
      });
  }

  handleFirstNameChange = (event) => {
    this.setState({first_name: event.target.value});
    console.log(event);
  }
  handleLastNameChange = (event) => {
    this.setState({last_name: event.target.value});
    console.log(event);
  }

  handleEmailChange = (event) => {
    this.setState({email: event.target.value});
  }

  handlePasswordChange = (event) => {
    this.setState({password: event.target.value});
  }

  render() {
    return (
      <div className="container-signup">
        <div className="container-view">
          <h2>Sign Up</h2>
          <br />
          {this.state.error && <p>{this.state.error}</p>}
          <form onSubmit={this.handleSubmit} className="container-view-form" action="/login" method="post">
            <div className="field-line-first">
              <input type="first_name" name="first_name" onChange={this.handleFirstNameChange} placeholder="first name" />
            </div>
            <div className="field-line-last">
              <input type="last_name" name="last_name" onChange={this.handleLastNameChange} placeholder="last name" />
            </div>
            <div className="field-line-email">
              <input type="email" name="email" onChange={this.handleEmailChange} placeholder="email" autoComplete="off"/>
            </div>
            <div className="field-line-password">
              <input type="password"  name="password" onChange={this.handlePasswordChange} placeholder="password" autoComplete="off"/>
            </div>
            <br />
            <div>
              <input type="submit" value="Sign Up"/>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUpForm;