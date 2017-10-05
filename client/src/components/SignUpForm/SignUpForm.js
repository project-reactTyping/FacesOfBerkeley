import React from 'react';
import './SignUpForm.css';
import helpers from '../../utils/helpers';
import { Route, Redirect } from 'react-router';
import Cookies from 'universal-cookie';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: '',
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      redirect: false
    };
  }

  handleFirstNameChange = (event) => {
    this.setState({first_name: event.target.value});
    console.log(event);
  }

  handleSubmit = (e) => {
    console.log('im called');
    let realThis = this;
    e.preventDefault();
    let first_name = this.state.first_name.trim();
    let last_name = this.state.last_name.trim();
    let email = this.state.email.trim();
    let password = this.state.password.trim();
    if (password.length < 6) {
      return this.setState({error: 'Password must be more than 5 characters long'});
    }
    helpers.saveUser(first_name, last_name, email, password)
      .then(function(response){
        realThis.setState({ redirect: true})
        const cookies = new Cookies;
        cookies.set('currentUser', response.data[0]);
        console.log(cookies.get('currentUser'));
      });

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
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to='/user' />
    }
    return (
      <div className="container-signup">
        <div className="container-view">
          <h2>Sign Up</h2>
          <br />

          {this.state.error && <p>{this.state.error}</p>}

          <form onSubmit={this.handleSubmit} className="container-view-form" >
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