import React, { useState } from 'react';
import './HomePage.css';  // Import the CSS file

const Home = () => {
  const [loginDropdown, setLoginDropdown] = useState(false);
  const [registerDropdown, setRegisterDropdown] = useState(false);

  const toggleLoginDropdown = () => setLoginDropdown(!loginDropdown);
  const toggleRegisterDropdown = () => setRegisterDropdown(!registerDropdown);

  return (
    <div>
      {/* Navigation Bar */}
      <nav>
        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/farmers-info">For Farmers</a>
          <a href="/buyers-info">For Buyers</a>
          <a href="/admin">Admin</a>
          <a href="/contact">Contact Us</a>
        </div>
        <div className="nav-right">
          {/* Login Dropdown */}
          <div className="dropdown">
            <button className="dropdown-btn" onClick={toggleLoginDropdown}>
              Login
            </button>
            {loginDropdown && (
              <div className="dropdown-content">
                <a href="/farmer-login">Farmer</a>
                <a href="/buyer-login">Buyer</a>
                <a href="/admin-login">Admin</a>
              </div>
            )}
          </div>

          {/* Register Dropdown */}
          <div className="dropdown">
            <button className="dropdown-btn" onClick={toggleRegisterDropdown}>
              Register
            </button>
            {registerDropdown && (
              <div className="dropdown-content">
                <a href="/farmer-register">Farmer</a>
                <a href="/buyer-register">Buyer</a>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Banner Section */}
      <section className="banner">
        <h2>Empowering Farmers through Innovation</h2>
        <p>Helping farmers turn their crops into valuable products and connect with global buyers</p>
      </section>

      {/* Main Section */}
      <section className="main-section">
        <div className="section" id="farmers">
          <h3>Farmer Portal</h3>
          <p>List your agricultural products, manage inventory, and interact with buyers worldwide.</p>
          <a href="/farmer-dashboard">Farmer Dashboard</a>
        </div>

        <div className="section" id="buyers">
          <h3>Buyer Portal</h3>
          <p>Browse a variety of locally produced, value-added agricultural products and place orders easily.</p>
          <a href="/buyer-dashboard">Buyer Dashboard</a>
        </div>

        <div className="section" id="admin">
          <h3>Admin Panel</h3>
          <p>Manage users, oversee transactions, and maintain the integrity of the platform.</p>
          <a href="/admin-dashboard">Admin Dashboard</a>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; 2024 Support the Farmers. All rights reserved.</p>
      </footer>

      {/* CSS Styles */}
      <style>
        {`
          /* Dropdown Button */
          .dropdown {
            position: relative;
            display: inline-block;
          }

          /* Dropdown Button Style */
          .dropdown-btn {
            background-color: #087f5b; /* Green background */
            color: white;
            padding: 10px 20px;
            font-size: 16px;
            border: none;
            cursor: pointer;
          }

          /* Dropdown Content */
          .dropdown-content {
            display: block;
            position: absolute;
            background-color: #f9f9f9;
            min-width: 160px;
            box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
            z-index: 1;
          }

          /* Dropdown Links */
          .dropdown-content a {
            color: black;
            padding: 12px 16px;
            text-decoration: none;
            display: block;
          }

          /* Change color on hover */
          .dropdown-content a:hover {
            background-color: #f1f1f1;
          }

          /* Show the dropdown menu when hovering */
          .dropdown:hover .dropdown-content {
            display: block;
          }

          /* Hover state for dropdown button */
          .dropdown:hover .dropdown-btn {
            background-color: #3e8e41;
          }
        `}
      </style>
    </div>
  );
};

export default Home;
