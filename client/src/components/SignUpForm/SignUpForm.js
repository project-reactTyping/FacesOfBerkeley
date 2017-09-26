import React from 'react';
import './SignUpForm.css';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: ''
    };
  }

  onSubmit(e) {
    e.preventDefault();

    let first_name = this.refs.first_name.value.trim();
    let last_name = this.refs.last_name.value.trim();
    let email = this.refs.email.value.trim();
    let password = this.refs.password.value.trim();
  };

  render() {
    return (
      <div className="container-signup">
        <div className="container-view">
          <h2>Sign Up</h2>
          <br />
          <form onSubmit={this.onSubmit.bind(this)} className="container-view-form" action="/login" method="post">
            <div className="field-line-first">
              <input type="first_name" ref="first_name" name="first_name" placeholder="first name" />
            </div>
            <div className="field-line-last">
              <input type="last_name" ref="last_name" name="last_name" placeholder="last name" />
            </div>
            <div className="field-line-email">
              <input type="email" ref="email" name="email" placeholder="email" />
            </div>
            <div className="field-line-password">
              <input type="password" ref="password" name="password" placeholder="password" />
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