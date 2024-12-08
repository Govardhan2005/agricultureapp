import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const BuyerLogin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  // Handle form field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Form validation and submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic form validation
    if (!formData.email || !formData.password) {
      setErrorMessage('Email and Password are required');
      return;
    }

    // Send POST request to backend for login authentication
    try {
      const response = await axios.post('http://localhost:2005/checkcustomerlogin', {
        email: formData.email,
        password: formData.password
      });

      if (response.data.success) {
        setErrorMessage('');
        setSuccessMessage('Login successful! Redirecting...');

        // Redirect to the buyer dashboard or home page after successful login
        setTimeout(() => {
          navigate('/buyer-dashboard'); // Redirect to the Buyer Dashboard
        }, 2000);
      } else {
        setSuccessMessage('');
        setErrorMessage('Invalid credentials, please try again.');
      }
    } catch (error) {
      setSuccessMessage('');
      setErrorMessage('An error occurred while processing your request.');
    }
  };

  return (
    <>
      <style>
        {`
        body {
            font-family: 'Arial', sans-serif;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-image: url('images/bg-1.jpg');
            background-size: cover;
            background-position: center;
        }

        .login-container {
            background-color: rgba(255, 255, 255, 0.9);
            border-radius: 12px;
            box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
            padding: 40px;
            width: 100%;
            max-width: 450px;
            transition: all 0.3s ease-in-out;
        }

        .login-container h2 {
            text-align: center;
            color: darkgreen; /* Dark green color for the heading */
            margin-bottom: 30px;
            font-size: 2rem;
            font-weight: bold;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
        }

        .login-container form {
            display: flex;
            flex-direction: column;
        }

        .login-container label {
            margin-bottom: 5px;
            color: #333;
            font-weight: 600;
        }

        .login-container input[type="email"],
        .login-container input[type="password"] {
            padding: 12px;
            margin-bottom: 18px;
            border: 1px solid #ccc;
            border-radius: 8px;
            font-size: 1rem;
            outline: none;
            transition: border-color 0.3s ease-in-out;
        }

        .login-container input[type="email"]:focus,
        .login-container input[type="password"]:focus {
            border-color: #5b8a72;
        }

        .login-container button {
            padding: 12px;
            background-color: #5b8a72;
            color: white;
            border: none;
            border-radius: 8px;
            font-size: 1.1rem;
            cursor: pointer;
            transition: background-color 0.3s ease-in-out;
        }

        .login-container button:hover {
            background-color: #476b58;
        }

        .login-container .error {
            color: red;
            text-align: center;
            margin-bottom: 15px;
            font-size: 1rem;
            font-weight: bold;
        }

        .login-container .success {
            color: green;
            text-align: center;
            margin-bottom: 15px;
            font-size: 1rem;
            font-weight: bold;
        }

        .login-container .register-link {
            text-align: center;
            margin-top: 20px;
        }

        .login-container .register-link a {
            text-decoration: none;
            color: #5b8a72;
            font-weight: bold;
            font-size: 1rem;
        }

        .login-container .register-link a:hover {
            text-decoration: underline;
        }

        @media (max-width: 600px) {
            .login-container {
                padding: 25px;
                width: 90%;
            }

            .login-container h2 {
                font-size: 1.5rem;
            }
        }
        `}
      </style>

      <div className="login-container">
        <h2>Buyer Login</h2>

        {/* Display error or success messages */}
        {errorMessage && <div className="error">{errorMessage}</div>}
        {successMessage && <div className="success">{successMessage}</div>}

        {/* Login Form */}
        <form onSubmit={handleSubmit}>
          {/* Email */}
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            required
            placeholder="Enter your email"
            value={formData.email}
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
            value={formData.password}
            onChange={handleInputChange}
          />

          {/* Submit Button */}
          <button type="submit">Login</button>
        </form>

        {/* Register Link */}
        <div className="register-link">
          <p>Don't have an account? <a href="/buyer-register">Register here</a></p>
        </div>
      </div>
    </>
  );
};

export default BuyerLogin;
