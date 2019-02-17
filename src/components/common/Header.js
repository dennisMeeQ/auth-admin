import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../img/logo.svg';
import '../../styles/header.css';

const Header = () => (
    <header>
      <nav>
        <img src={logo} className="App-logo" alt="logo" />
        <Link to='/'>Home</Link>
        {" | "}
        <Link to='/user'>Users</Link>
      </nav>
    </header>
  )

export default Header;