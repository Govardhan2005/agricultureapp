import React from 'react';
import './Navbar.css';  // Make sure to import the associated CSS file for styles

const Navbar = () => {
  return (
    <nav>
      <div className="nav-links">
        <a href="/">Home</a>
        <a href="/farmers-info">For Farmers</a>
        <a href="/buyers-info">For Buyers</a>
        <a href="/admin">Admin</a>
        <a href="/contact">Contact Us</a>
      </div>
      <div className="nav-right">
        <a href="/login">Login</a>
        <a href="/register">Register</a>
      </div>
    </nav>
  );
};

export default Navbar;
