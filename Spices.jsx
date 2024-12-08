import React from 'react';

const Spices = () => {
  const updateQuantity = (event) => {
    const quantityInput = event.target.previousElementSibling;
    const quantity = quantityInput.value;
    const href = event.target.getAttribute('href');
    event.target.setAttribute('href', href + quantity); // Append quantity to the URL
  };

  return (
    <div>
      <style>
        {`
          body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            background-color: #f7f4f1;
          }

          nav {
            background-color: #406343;
            display: flex;
            width:1473px;
            justify-content: space-between;
            align-items: center;
            padding: 10px 20px;
          }

          .nav-links {
            display: flex;
            gap: 15px; /* Space between links */
          }

          .nav-links a {
            color: white;
            text-align: center;
            padding: 16px 22px;
            text-decoration: none;
            font-weight: bold;
          }

          .nav-links a:hover {
            background-color: #2f4f33;
            color: #f2f2f2;
          }

          .nav-right {
            display: flex;
            gap: 15px; /* Space between login/register links */
          }

          .nav-right a {
            color: white;
            text-align: center;
            padding: 10px 15px;
            text-decoration: none;
            font-weight: bold;
          }

          .nav-right a:hover {
            background-color: #2f4f33;
            color: #f2f2f2;
          }

          .product-section {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            margin: 3rem auto;
            max-width: 1200px;
          }

          .product-item {
            background-color: #fff;
            border-radius: 12px;
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
            padding: 25px;
            width: 30%;
            margin-bottom: 20px;
            text-align: center;
          }

          .product-item h3 {
            color: #406343;
          }

          .product-item img {
            max-width: 100%;
            height: auto;
          }

          .buy-button {
            background-color: #5b8a72;
            color: white;
            text-decoration: none;
            padding: 10px 15px;
            border-radius: 5px;
            cursor: pointer;
            font-weight: bold;
            display: inline-block;
            margin-top: 10px;
          }

          .buy-button:hover {
            background-color: #4a6f61;
          }

          .price {
            font-weight: bold;
            margin: 10px 0;
          }

          .quantity {
            width: 80%;
            padding: 5px;
            margin: 10px 0;
            border: 1px solid #ccc;
            border-radius: 5px;
          }

          footer {
            background-color: #5b8a72;
            color: white;
            text-align: center;
            padding: 1.5rem 0;
            margin-top: 3rem;
            font-size: 1rem;
          }
        `}
      </style>

      <nav>
        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/farmers-info">For Farmers</a>
          <a href="/buyers-info">For Buyers</a>
          <a href="/admin">Admin</a>
          <a href="/contact">Contact Us</a>
        </div>
        
      </nav>

      <section className="product-section">
        <div className="product-item">
          <h3>Black Pepper</h3>
          <img src="src/images/blackpepper.jpeg" alt="Black Pepper" />
          <p>Freshly ground black pepper for a spicy kick.</p>
          <div className="price">$1.50 per kg</div>
          <input type="number" className="quantity" min="1" placeholder="Enter kg" />
          <a
            href="placeOrder.jsp?product=BlackPepper&price=1.50&quantity="
            className="buy-button"
            onClick={updateQuantity}
          >
            Buy Now
          </a>
        </div>

        <div className="product-item">
          <h3>Cumin</h3>
          <img src="src/images/cumin.jpeg" alt="Cumin" />
          <p>High-quality cumin seeds for cooking.</p>
          <div className="price">$2.00 per kg</div>
          <input type="number" className="quantity" min="1" placeholder="Enter kg" />
          <a
            href="placeOrder.jsp?product=Cumin&price=2.00&quantity="
            className="buy-button"
            onClick={updateQuantity}
          >
            Buy Now
          </a>
        </div>

        <div className="product-item">
          <h3>Coriander</h3>
          <img src="src/images/coriander.jpeg" alt="Coriander" />
          <p>Fresh coriander leaves for flavoring dishes.</p>
          <div className="price">$1.80 per kg</div>
          <input type="number" className="quantity" min="1" placeholder="Enter kg" />
          <a
            href="placeOrder.jsp?product=Coriander&price=1.80&quantity="
            className="buy-button"
            onClick={updateQuantity}
          >
            Buy Now
          </a>
        </div>

        <div className="product-item">
          <h3>Cinnamon</h3>
          <img src="src/images/cinnamon.jpeg" alt="Cinnamon" />
          <p>Sweet and aromatic cinnamon for baking and cooking.</p>
          <div className="price">$3.00 per kg</div>
          <input type="number" className="quantity" min="1" placeholder="Enter kg" />
          <a
            href="placeOrder.jsp?product=Cinnamon&price=3.00&quantity="
            className="buy-button"
            onClick={updateQuantity}
          >
            Buy Now
          </a>
        </div>

        <div className="product-item">
          <h3>Cardamom</h3>
          <img src="src/images/cardamom.jpeg" alt="Cardamom" />
          <p>Fragrant cardamom pods for savory and sweet dishes.</p>
          <div className="price">$4.00 per kg</div>
          <input type="number" className="quantity" min="1" placeholder="Enter kg" />
          <a
            href="placeOrder.jsp?product=Cardamom&price=4.00&quantity="
            className="buy-button"
            onClick={updateQuantity}
          >
            Buy Now
          </a>
        </div>

        <div className="product-item">
          <h3>Clove</h3>
          <img src="src/images/clove.jpeg" alt="Clove" />
          <p>Pungent cloves for adding depth to recipes.</p>
          <div className="price">$5.00 per kg</div>
          <input type="number" className="quantity" min="1" placeholder="Enter kg" />
          <a
            href="placeOrder.jsp?product=Clove&price=5.00&quantity="
            className="buy-button"
            onClick={updateQuantity}
          >
            Buy Now
          </a>
        </div>

        <div className="product-item">
          <h3>Fennel</h3>
          <img src="src/images/fennel.jpeg" alt="Fennel" />
          <p>Sweet and aromatic fennel seeds for seasoning.</p>
          <div className="price">$1.70 per kg</div>
          <input type="number" className="quantity" min="1" placeholder="Enter kg" />
          <a
            href="placeOrder.jsp?product=Fennel&price=1.70&quantity="
            className="buy-button"
            onClick={updateQuantity}
          >
            Buy Now
          </a>
        </div>

        <div className="product-item">
          <h3>Ginger</h3>
          <img src="src/images/ginger.jpeg" alt="Ginger" />
          <p>Fresh ginger root for a spicy kick.</p>
          <div className="price">$2.50 per kg</div>
          <input type="number" className="quantity" min="1" placeholder="Enter kg" />
          <a
            href="placeOrder.jsp?product=Ginger&price=2.50&quantity="
            className="buy-button"
            onClick={updateQuantity}
          >
            Buy Now
          </a>
        </div>

        <div className="product-item">
          <h3>Nutmeg</h3>
          <img src="src/images/nutmeg.jpeg" alt="Nutmeg" />
          <p>Grated nutmeg for a warm, sweet flavor.</p>
          <div className="price">$6.00 per kg</div>
          <input type="number" className="quantity" min="1" placeholder="Enter kg" />
          <a
            href="placeOrder.jsp?product=Nutmeg&price=6.00&quantity="
            className="buy-button"
            onClick={updateQuantity}
          >
            Buy Now
          </a>
        </div>

        <div className="product-item">
          <h3>Turmeric</h3>
          <img src="src/images/turmeric.jpeg" alt="Turmeric" />
          <p>Ground turmeric for a vibrant color and flavor.</p>
          <div className="price">$2.20 per kg</div>
          <input type="number" className="quantity" min="1" placeholder="Enter kg" />
          <a
            href="placeOrder.jsp?product=Turmeric&price=2.20&quantity="
            className="buy-button"
            onClick={updateQuantity}
          >
            Buy Now
          </a>
        </div>
      </section>

      <footer>
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Spices;
