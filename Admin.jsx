import React from 'react';

const Admin = () => {
  return (
    <div>
      <style>
        {`
        /* General Styles */
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f7f4f1;
            box-sizing: border-box;
        }

        /* Navigation Bar */
        nav {
            background-color: #406343;
            display: flex;
            width:1473px;
            justify-content: flex-start;  /* Align items to the left */
            align-items: center;
            padding: 10px 20px;
        }

        nav .nav-links {
            display: flex;
        }

        nav a {
            color: white;
            text-align: center;
            padding: 14px 15px; /* Reduced padding to bring links closer */
            text-decoration: none;
            font-weight: bold;
            margin-right: 10px; /* Adds space between links */
        }

        nav a:hover {
            background-color: #2f4f33;
            color: #f2f2f2;
        }

        /* Section Styles */
        .admin-section {
            max-width: 1200px;
            margin: 3rem auto;
            background-color: #fff;
            padding: 2rem;
            border-radius: 8px;
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
        }

        .admin-section h2 {
            color: #406343;
            font-size: 2.5rem;
            margin-bottom: 1.5rem;
        }

        .admin-section .actions {
            margin-bottom: 2rem;
        }

        .admin-section .actions button {
            padding: 10px 20px;
            background-color: #5b8a72;
            border: none;
            color: white;
            font-weight: bold;
            margin-right: 10px;
            cursor: pointer;
        }

        .admin-section .actions button:hover {
            background-color: #406343;
        }

        /* Tables */
        .data-table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 2rem;
        }

        .data-table th, .data-table td {
            padding: 12px;
            text-align: left;
            border: 1px solid #ccc;
        }

        .data-table th {
            background-color: #406343;
            color: white;
        }

        .data-table td {
            background-color: #f7f7f7;
        }

        .data-table tr:nth-child(even) td {
            background-color: #e9e9e9;
        }

        /* Footer */
        footer {
            background-color: #5b8a72;
            color: white;
            text-align: center;
            padding: 1.5rem 0;
            font-size: 1rem;
        }
        `}
      </style>

      {/* Navigation Bar */}
      <nav>
        <a href="/">Home</a>
        <a href="/farmers-info">For Farmers</a>
        <a href="/buyers-info">For Buyers</a>
        <a href="/admin">Admin</a>
        <a href="/contact">Contact Us</a>
      </nav>

      {/* Admin Section */}
      <section className="admin-section">
        <h2>Admin Dashboard</h2>
        <p>Manage registered farmers, buyers, and their corresponding orders.</p>

        {/* Action Buttons for Admin Operations */}
        <div className="actions">
          {/* Farmers Management */}
          <h3>Farmers Management</h3>
          <button onClick={() => window.location.href = 'add-farmer.jsx'}>Add Farmer</button>
          <button onClick={() => window.location.href = 'update-farmer.jsx'}>Update Farmer</button>

          {/* Buyers Management */}
          <h3>Buyers Management</h3>
          <button onClick={() => window.location.href = 'add-buyer.jsp'}>Add Buyer</button>
          <button onClick={() => window.location.href = 'update-buyer.jsp'}>Update Buyer</button>
        </div>

        {/* Farmers Data Table */}
        <h3>Farmers Data</h3>
        <table className="data-table">
          <thead>
            <tr>
              <th>Farmer ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Orders</th>
            </tr>
          </thead>
          <tbody>
            {/* Sample Farmer Data */}
            <tr>
              <td>F001</td>
              <td>John Doe</td>
              <td>johndoe@example.com</td>
              <td>+1234567890</td>
              <td>Rural Area, City</td>
              <td><a href="farmer-orders.jsp?farmerId=F001">View Orders</a></td>
            </tr>
            <tr>
              <td>F002</td>
              <td>Jane Smith</td>
              <td>janesmith@example.com</td>
              <td>+0987654321</td>
              <td>Farming Village, Town</td>
              <td><a href="farmer-orders.jsp?farmerId=F002">View Orders</a></td>
            </tr>
            {/* Add more farmer data here dynamically */}
          </tbody>
        </table>

        {/* Buyers Data Table */}
        <h3>Buyers Data</h3>
        <table className="data-table">
          <thead>
            <tr>
              <th>Buyer ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Orders</th>
            </tr>
          </thead>
          <tbody>
            {/* Sample Buyer Data */}
            <tr>
              <td>B001</td>
              <td>Michael Lee</td>
              <td>michaellee@example.com</td>
              <td>+1234567891</td>
              <td>Urban Center, City</td>
              <td><a href="buyer-orders.jsp?buyerId=B001">View Orders</a></td>
            </tr>
            <tr>
              <td>B002</td>
              <td>Emily Davis</td>
              <td>emilydavis@example.com</td>
              <td>+0987654322</td>
              <td>Suburban Area, Town</td>
              <td><a href="buyer-orders.jsp?buyerId=B002">View Orders</a></td>
            </tr>
            {/* Add more buyer data here dynamically */}
          </tbody>
        </table>
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; 2024 Support the Farmers. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Admin;
