import React from "react";
import "./Signin.css";
import SignUpform from '../SignUpForm';

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: ''
    };
  }

  onSubmit(e) {
    e.preventDefault();

    let email = this.refs.email.value.trim();
    let password = this.refs.password.value.trim();

    this.props.loginWithPassword( {email}, password, (err) => {
      if (err) {
        this.setState({error: 'Unable to signin. Check email and or password.'});
      } else {
        this.setState({error: ''});
      }
    });
  }

  render() {
    return (
      <div className="boxed-view">
        <div className="boxed-view__box">
          <h2>Login</h2>

          {this.state.error ? <p>{this.state.error}</p> : undefined}

          <form onSubmit={this.onSubmit.bind(this)} className="boxed-view__form" action="/login" method="post">
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
              <a href="/auth/facebook">Login with Facebook</a>
              <a href="/signup">Need an Account?</a>
          </form>
        </div>
      </div>
    );
  }
}


export default Signin;