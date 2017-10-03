import React from 'react';
import NavLinks from '../../components/NavLinks';
import SearchBar from '../../components/SearchBar';
import LogOut from '../../components/LogOut';

import './Nav.css';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div className="container">
        <div className="container-nav">
          <SearchBar />
          <NavLinks text="Home" />
          <NavLinks text="Friends" />
          <NavLinks text="Followers" />
          <NavLinks text="Profile" />
          <LogOut />
        </div>
      </div>
    )
  }
}

export default Nav;