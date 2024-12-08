import React, { useState } from 'react';

const FarmerRegister = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    state: '',
    city: '',
    town: '',
    village: '',
    mobile: ''
  });

  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Handle form field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Form validation and submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic form validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.state ||
      !formData.city ||
      !formData.town ||
      !formData.village ||
      !formData.mobile
    ) {
      setErrorMessage('All fields are required');
      return;
    }

    // Reset error message and display success message
    setErrorMessage('');
    setSuccessMessage('Registration successful! Redirecting...');

    // Redirect or show success message (replace this logic as per your needs)
    setTimeout(() => {
      window.location.href = '/login'; // Redirect to the login page
    }, 2000);
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

        .register-container {
            background-color: rgba(255, 255, 255, 0.9);
            border-radius: 12px;
            box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
            padding: 40px;
            width: 100%;
            max-width: 450px;
            transition: all 0.3s ease-in-out;
        }

        .register-container h2 {
            text-align: center;
            color: #ffffff; /* White color for better contrast */
            margin-bottom: 30px;
            font-size: 2rem;
            font-weight: bold;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7); /* Shadow for better visibility on any background */
        }

        .register-container form {
            display: flex;
            flex-direction: column;
        }

        .register-container label {
            margin-bottom: 5px;
            color: #333;
            font-weight: 600;
        }

        .register-container input[type="text"],
        .register-container input[type="email"],
        .register-container input[type="password"],
        .register-container input[type="tel"],
        .register-container select {
            padding: 12px;
            margin-bottom: 18px;
            border: 1px solid #ccc;
            border-radius: 8px;
            font-size: 1rem;
            outline: none;
            transition: border-color 0.3s ease-in-out;
        }

        .register-container input[type="text"]:focus,
        .register-container input[type="email"]:focus,
        .register-container input[type="password"]:focus,
        .register-container input[type="tel"]:focus {
            border-color: #5b8a72;
        }

        .register-container button {
            padding: 12px;
            background-color: #5b8a72;
            color: white;
            border: none;
            border-radius: 8px;
            font-size: 1.1rem;
            cursor: pointer;
            transition: background-color 0.3s ease-in-out;
        }

        .register-container button:hover {
            background-color: #476b58;
        }

        .register-container .error {
            color: red;
            text-align: center;
            margin-bottom: 15px;
            font-size: 1rem;
            font-weight: bold;
        }

        .register-container .success {
            color: green;
            text-align: center;
            margin-bottom: 15px;
            font-size: 1rem;
            font-weight: bold;
        }

        .register-container .login-link {
            text-align: center;
            margin-top: 20px;
        }

        .register-container .login-link a {
            text-decoration: none;
            color: #5b8a72;
            font-weight: bold;
            font-size: 1rem;
        }

        .register-container .login-link a:hover {
            text-decoration: underline;
        }

        @media (max-width: 600px) {
            .register-container {
                padding: 25px;
                width: 90%;
            }

            .register-container h2 {
                font-size: 1.5rem;
            }
        }
        `}
      </style>

      <div className="register-container">
        

        {/* Display error or success messages */}
        {errorMessage && <div className="error">{errorMessage}</div>}
        {successMessage && <div className="success">{successMessage}</div>}
        <h2>Farmer Registration</h2>
        {/* Farmer Registration Form */}
        <form onSubmit={handleSubmit}>
          {/* Name */}
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            required
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleInputChange}
          />

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

          {/* State */}
          <label htmlFor="state">State:</label>
          <input
            type="text"
            name="state"
            id="state"
            required
            placeholder="Enter your state"
            value={formData.state}
            onChange={handleInputChange}
          />

          {/* City */}
          <label htmlFor="city">City:</label>
          <input
            type="text"
            name="city"
            id="city"
            required
            placeholder="Enter your city"
            value={formData.city}
            onChange={handleInputChange}
          />

          {/* Town */}
          <label htmlFor="town">Town:</label>
          <input
            type="text"
            name="town"
            id="town"
            required
            placeholder="Enter your town"
            value={formData.town}
            onChange={handleInputChange}
          />

          {/* Village */}
          <label htmlFor="village">Village:</label>
          <input
            type="text"
            name="village"
            id="village"
            required
            placeholder="Enter your village"
            value={formData.village}
            onChange={handleInputChange}
          />

          {/* Mobile */}
          <label htmlFor="mobile">Mobile:</label>
          <input
            type="tel"
            name="mobile"
            id="mobile"
            required
            placeholder="Enter your mobile number"
            value={formData.mobile}
            onChange={handleInputChange}
          />

          {/* Submit Button */}
          <button type="submit">Register</button>
        </form>

        {/* Login Link */}
        <div className="login-link">
          <p>Already have an account? <a href="/farmer-login">Login here</a></p>
        </div>
      </div>
    </>
  );
};

export default FarmerRegister;
