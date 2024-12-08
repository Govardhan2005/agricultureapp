import React from 'react';

const FarmersInfo = () => {
  return (
    <div>
      {/* CSS Styling in JSX */}
      <style>
        {`
          /* General Styles */
          body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            background: url('src/images/bg-1.jpg') no-repeat center center fixed;
            background-size: cover;
            color: #fff; /* Adjust text color for better readability */
          }

          /* Navigation Bar */
          nav {
            background-color: rgba(64, 99, 67, 0.85); /* Make nav bar semi-transparent */
            display: flex;
            width:1474px;
            justify-content: space-between;
            align-items: center;
            padding: 10px 20px;
          }

          nav .nav-links {
            display: flex;
          }

          nav a {
            display: block;
            color: white;
            text-align: center;
            padding: 16px 22px;
            text-decoration: none;
            font-weight: bold;
          }

          nav a:hover {
            background-color: #2f4f33;
            color: #f2f2f2;
          }

          .nav-right {
            display: flex;
          }

          .nav-right a {
            padding: 16px 22px;
          }

          /* Section Styling */
          section {
            max-width: 1200px;
            margin: 3rem auto;
            padding: 20px;
            background-color: rgba(255, 255, 255, 0.9); /* White background with slight transparency */
            border-radius: 12px;
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
            margin-bottom: 2rem;
            color: #000; /* Ensure text contrast over semi-transparent background */
          }

          section h2 {
            color: #406343;
            font-size: 2.5rem;
            margin-bottom: 1.5rem;
          }

          section p, ul {
            color: #555;
            font-size: 1.1rem;
            line-height: 1.8;
            margin-bottom: 1.5rem;
          }

          /* Footer */
          footer {
            background-color: rgba(91, 138, 114, 0.9); /* Semi-transparent footer */
            color: white;
            text-align: center;
            padding: 1.5rem 0;
            font-size: 1rem;
          }

          /* Responsive Design */
          @media (max-width: 768px) {
            nav {
              flex-direction: column;
            }
          }
        `}
      </style>

      {/* Navigation */}
      <nav>
        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/orders">Orders</a>
          <a href="/market">Market</a>
          <a href="/support">Support</a>
        </div>
        <div className="nav-right">
          <a href="/">Logout</a>
        </div>
      </nav>

      {/* Section: Welcome Message */}
      <section id="welcome">
        <h2>Welcome Farmers!</h2>
        <p>This platform is designed to support you in your farming journey. Here you can find various resources, including information about crops, tools, and farming methods.</p>
      </section>

      {/* Section: Resources */}
      <section id="resources">
        <h2>Resources for Farmers</h2>
        <p>Explore our collection of resources tailored to help you succeed:</p>
        <ul>
          <li><a href="/tools">Farming Tools</a></li>
          <li><a href="/methods">Farming Methods</a></li>
        </ul>
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; 2024 Support the Farmers. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default FarmersInfo;
