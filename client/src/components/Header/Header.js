import React, { Component } from 'react';

class Header extends Component {
  onLoginClick(){
    this.props.onLoginClick();
  }

  onLogoutClick(){
    this.props.onLogoutClick();
  }

  render() {
    let navItems;
    if(this.props.idToken){
      navItems = <div onClick={this.onLogoutClick.bind(this)} href="#">Logout</div>
    } else {
      navItems = <div onClick={this.onLoginClick.bind(this)} href="#">Login</div>
    }
    return (
      <div>
      {navItems}
      </div>
    );
  }
}

export default Header;
