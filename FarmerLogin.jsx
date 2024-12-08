import React, { useState } from 'react';

const FarmerLogin = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [farmerData, setFarmerData] = useState({
    email: '',
    password: '',
    mobile: ''
  });

  // Handle form field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFarmerData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Redirect to farmers-info.jsp (or desired page) after successful login
  const navigateToFarmersInfo = () => {
    // You can add your validation logic here before redirect
    if (farmerData.email && farmerData.password) {
      window.location.href = 'farmers-info.jsp'; // Redirect to the farmers-info.jsp
    } else {
      setErrorMessage('Please fill in both email and password');
    }
  };

  return (
    <>
      <style>
        {`
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f7f4f1;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }

        .login-container {
            background-color: #fff;
            border-radius: 10px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
            padding: 30px;
            max-width: 400px;
            width: 100%;
        }

        .login-container h2 {
            text-align: center;
            color: #406343;
            margin-bottom: 20px;
        }

        .login-container form {
            display: flex;
            flex-direction: column;
        }

        .login-container label {
            margin-bottom: 5px;
            color: #555;
        }

        .login-container input[type="text"],
        .login-container input[type="password"],
        .login-container input[type="email"],
        .login-container input[type="tel"],
        .login-container select {
            padding: 10px;
            margin-bottom: 15px;
            border: 1px solid #ccc;
            border-radius: 5px;
            font-size: 1rem;
        }

        .login-container button {
            padding: 10px;
            background-color: #5b8a72;
            color: white;
            border: none;
            border-radius: 5px;
            font-size: 1rem;
            cursor: pointer;
        }

        .login-container button:hover {
            background-color: #476b58;
        }

        .login-container .error {
            color: red;
            text-align: center;
            margin-bottom: 10px;
        }

        .login-container .register-link {
            text-align: center;
            margin-top: 20px;
        }

        .login-container .register-link a {
            text-decoration: none;
            color: #5b8a72;
            font-weight: bold;
        }

        .login-container .register-link a:hover {
            text-decoration: underline;
        }
        `}
      </style>

      <div className="login-container">
        <h2>Farmer Login</h2>

        {/* Display any error messages */}
        {errorMessage && <div className="error">{errorMessage}</div>}

        {/* Farmer Login Form */}
        <form>
          {/* Email */}
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            required
            placeholder="Enter your email"
            value={farmerData.email}
            onChange={handleInputChange}
          />

          {/* Password */}
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            required
            placeholder="Enter your password"
            value={farmerData.password}
            onChange={handleInputChange}
          />

          

          {/* Submit Button */}
          <button type="button" onClick={navigateToFarmersInfo}>
            Login
          </button>
        </form>

        {/* Register Link */}
        <div className="register-link">
          <p>Don't have an account? <a href="/register">Register here</a></p>
        </div>
      </div>
    </>
  );
};

export default FarmerLogin;
