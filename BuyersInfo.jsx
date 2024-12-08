import React from 'react';

const BuyersInfo = () => {
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
            background-color: #f7f4f1;
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

          /* Right Section for Login and Register */
          .nav-right {
            display: flex;
          }

          .nav-right a {
            padding: 16px 22px;
          }

          /* Main Section for Products */
          .main-section {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            margin: 3rem auto;
            max-width: 1200px;
          }

          .product-section {
            background-color: #fff;
            border-radius: 12px;
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
            padding: 25px;
            width: 30%;
            margin-bottom: 20px;
            text-align: center;
            transition: transform 0.2s;
          }

          .product-section:hover {
            transform: translateY(-5px);
          }

          .product-section h3 {
            color: #406343;
            margin-bottom: 1.2rem;
            font-size: 1.8rem;
          }

          .product-section img {
            max-width: 100%;
            height: auto;
            margin-bottom: 15px;
          }

          .product-section p {
            color: #555;
            font-size: 1rem;
            line-height: 1.6;
          }

          .product-section a {
            display: inline-block;
            margin-top: 15px;
            padding: 12px 24px;
            color: white;
            background-color: #5b8a72;
            text-decoration: none;
            border-radius: 5px;
            font-weight: bold;
          }

          .product-section a:hover {
            background-color: #476b58;
          }

          /* Footer */
          footer {
            background-color: #5b8a72;
            color: white;
            text-align: center;
            padding: 1.5rem 0;
            margin-top: 3rem;
            font-size: 1rem;
          }

          /* Responsive Design */
          @media (max-width: 768px) {
            .main-section {
              flex-direction: column;
              align-items: center;
            }

            .product-section {
              width: 80%;
            }

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
    <a href="/farmers-info">For Farmers</a>
    <a href="/buyers-info.">For Buyers</a>
    <a href="/contact.jsp">Contact Us</a>
  </div>
  <div className="nav-right">
    <a href="/">Logout</a>
  </div>
</nav>


      {/* Main Section with Products */}
      <section className="main-section">
        {/* Vegetables Section */}
        <div className="product-section">
          <h3>Vegetables</h3>
          <img src="src/images/vegetables.jpeg" alt="Vegetables Image" />
          <p>Freshly grown organic vegetables from local farms.</p>
          <a href="/vegetables">View More</a>
        </div>

        {/* Dairy Section */}
        <div className="product-section">
          <h3>Dairy</h3>
          <img src="src/images/dairy.jpeg" alt="Dairy Image" />
          <p>Pure and healthy dairy products including milk and cheese.</p>
          <a href="/dairy">View More</a>
        </div>

        {/* Spices Section */}
        <div className="product-section">
          <h3>Spices</h3>
          <img src="src/images/spices.jpeg" alt="Spices Image" />
          <p>Aromatic spices sourced directly from farmers.</p>
          <a href="/spices">View More</a>
        </div>

        {/* Fruits Section */}
        <div className="product-section">
          <h3>Fruits</h3>
          <img src="src/images/fruits.jpg" alt="Fruits Image" />
          <p>Fruits, berries, and vegetables fresh from farms.</p>
          <a href="/fruits">View More</a>
        </div>

        {/* Beverages Section */}
        <div className="product-section">
          <h3>Beverages</h3>
          <img src="src/images/beverages.jpeg" alt="Beverages Image" />
          <p>Natural beverages made from farm-fresh ingredients.</p>
          <a href="/beverages">View More</a>
        </div>

        {/* Nuts Section */}
        <div className="product-section">
          <h3>Nuts</h3>
          <img src="src/images/nuts.jpeg" alt="Nuts Image" />
          <p>A variety of nuts from sustainable farms.</p>
          <a href="/nuts">View More</a>
        </div>

        {/* Legume Section */}
        <div className="product-section">
          <h3>Legume</h3>
          <img src="src/images/legume.jpeg" alt="Legume Image" />
          <p>Healthy legumes for your dietary needs.</p>
          <a href="/legume">View More</a>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; 2024 Support the Farmers. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default BuyersInfo;
