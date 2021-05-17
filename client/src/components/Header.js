import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = ({ logo }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink className="navbar-brand" to="/">
        <img
          src={logo}
          className="App-logo"
          alt="logo"
          style={{ height: '100%', width: '40%' }}
        />
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/" activeClassName="selected">
              All Data
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/users"
              activeClassName="selected"
            >
              Users
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/products"
              activeClassName="selected"
            >
              Products
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
