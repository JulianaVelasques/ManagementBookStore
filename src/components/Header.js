import logo from '../assets/logoWhite.png';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="headlogo">
        <a href="/">
          <img alt="logo" src={logo} width="200px"></img>
        </a>
      </div>

      <div className="links">
        <NavLink to="/" className="link" activeClassName="active" exact>
          Books List
        </NavLink>
        <NavLink to="/add" className="link" activeClassName="active">
          Add Book
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
