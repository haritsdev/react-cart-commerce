import React from 'react';
import '../App.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary py-3 shadow-sm">
      <div className="container">
        <NavLink className="navbar-brand fw-bold fs-4" to="/">
          Teguh Collection
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/products">
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/login">
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="buttons">
            <NavLink to="/" className="btn btn-outline-dark">
              <i className="fa fa-sign-in me-1"> &nbsp;Login</i>
            </NavLink>
            <NavLink to="/" className="btn btn-outline-dark ms-2">
              <i className="fa fa-user-plus me-1"> &nbsp;Register</i>
            </NavLink>
            <NavLink to="/" className="btn btn-outline-dark ms-2">
              <i className="fa fa-shopping-cart me-1"> &nbsp;Cart</i>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
