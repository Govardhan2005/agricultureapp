import React from 'react';

const Order = () => {
  return (
    <>
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
            justify-content: space-between;
            align-items: center;
            padding: 10px 20px;
        }

        nav .nav-links {
            display: flex;
        }

        nav a {
            color: white;
            text-align: center;
            padding: 14px 20px;
            text-decoration: none;
            font-weight: bold;
        }

        nav a:hover {
            background-color: #2f4f33;
            color: #f2f2f2;
        }

        /* Orders Section */
        .orders-section {
            max-width: 1200px;
            margin: 3rem auto;
            background-color: #fff;
            padding: 2rem;
            border-radius: 8px;
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
        }

        .orders-section h2 {
            color: #406343;
            font-size: 2.5rem;
            margin-bottom: 1.5rem;
        }

        .orders-table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 1.5rem;
        }

        .orders-table th, .orders-table td {
            padding: 12px;
            text-align: left;
            border: 1px solid #ccc;
        }

        .orders-table th {
            background-color: #406343;
            color: white;
        }

        .orders-table td {
            background-color: #f7f7f7;
        }

        .orders-table tr:nth-child(even) td {
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
      <nav>
        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/orders">Orders</a>
          <a href="/market">Market</a>
          <a href="/support">Support</a>
        </div>
      </nav>
      <section className="orders-section">
        <h2>Your Orders</h2>
        <p>Below is the list of orders that you have received:</p>

        <table className="orders-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Buyer</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>101</td>
              <td>Wheat</td>
              <td>200 kg</td>
              <td>Ravi</td>
              <td>Processing</td>
              <td>2024-09-15</td>
            </tr>
            <tr>
              <td>102</td>
              <td>Rice</td>
              <td>300 kg</td>
              <td>Rahul</td>
              <td>Shipped</td>
              <td>2024-09-20</td>
            </tr>
            <tr>
              <td>103</td>
              <td>Corn</td>
              <td>150 kg</td>
              <td>Kiran</td>
              <td>Delivered</td>
              <td>2024-09-22</td>
            </tr>
          </tbody>
        </table>
      </section>
      <footer>
        <p>&copy; 2024 Support the Farmers. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Order;
