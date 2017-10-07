import React from "react";
import "./LogOut.css";
import Cookies from 'universal-cookie';
import { Redirect } from 'react-router';

class LogOut extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: '',
      redirect: false
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let realThis = this;
    realThis.setState({ redirect: true });
    console.log('you clicked me');
    const cookies = new Cookies();
    cookies.set('currentUser', null);
    console.log(cookies.get('currentUser'));
  }

  render() {
      const { redirect } = this.state;
      if (redirect) {
        return <Redirect to='/'/>;
      }
      return (
        <a className="logOut" onSubmit={this.handleSubmit} href="/logout">
        LogOut
        </a>
      );
  }
}


// function logout(event) {
//   event.preventDefault();
//     console.log('you clicked me');
//     const cookies = new Cookies();
//     cookies.set('currentUser', null);
//     console.log(cookies.get('currentUser'));
// }
// const LogOut = props => (
// 	<a className="logOut" onClick={logout} href="/logout" {...props}>
// 	LogOut
// 	</a>
// 	);

export default LogOut;