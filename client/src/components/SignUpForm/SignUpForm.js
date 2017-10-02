import React from 'react';
import './SignUpForm.css';
import axios from 'axios';

var db = process.env.MONGODB_URI || 'mongodb://localhost/FacesOfBerkeley/Profile';

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
    let first_name = this.state.first_name.trim();
    let last_name = this.state.last_name.trim();
    let email = this.state.email.trim();
    let password = this.state.password.trim();

    axios.post(db, { first_name, last_name, email, password })
          .then((result) => {
            console.log(result.data);
          });
    first_name = first_name.val('');

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

          <form className="container-view-form" action="db" method="post">
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
              <input onSubmit={this.handleSubmit} type="submit" value="Sign Up"/>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUpForm;