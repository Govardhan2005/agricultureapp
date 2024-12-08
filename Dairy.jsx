import React, { useState } from 'react';

const Dairy = () => {
    const [quantity, setQuantity] = useState({});

    const updateQuantity = (event, product) => {
        const newQuantity = event.target.value;
        setQuantity({ ...quantity, [product]: newQuantity });
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
                        gap: 15px;
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
                        gap: 15px;
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

                    .price {
                        font-size: 1.2rem;
                        color: #406343;
                        margin: 10px 0;
                    }

                    .quantity {
                        margin: 10px 0;
                    }

                    .buy-button {
                        background-color: #5b8a72;
                        color: white;
                        border: none;
                        padding: 10px 15px;
                        border-radius: 5px;
                        cursor: pointer;
                        font-weight: bold;
                        text-decoration: none;
                        transition: background-color 0.3s;
                    }

                    .buy-button:hover {
                        background-color: #406343;
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
                    <a href="/index">Home</a>
                    <a href="/farmers-info">For Farmers</a>
                    <a href="/buyers-info">For Buyers</a>
                    <a href="/admin">Admin</a>
                    <a href="/contact">Contact Us</a>
                </div>
                
            </nav>

            <section className="product-section">
                {[
                    { name: 'Milk', price: 1.20, image: 'milk.jpeg' },
                    { name: 'Cheese', price: 3.50, image: 'cheese.jpeg' },
                    { name: 'Yogurt', price: 2.00, image: 'yogurt.jpeg' },
                    { name: 'Cream', price: 3.00, image: 'cream.jpeg' },
                    { name: 'Butter', price: 4.00, image: 'butter.jpeg' },
                    { name: 'Ice Cream', price: 5.00, image: 'icecream.jpeg' }
                ].map((product, index) => (
                    <div className="product-item" key={index}>
                        <h3>{product.name}</h3>
                        <img src={`src/images/${product.image}`} alt={product.name} />
                        <p>{`${product.name} from local dairy farms`}</p>
                        <div className="price">{`$${product.price} per kg`}</div>
                        <input
                            type="number"
                            className="quantity"
                            min="1"
                            value={quantity[product.name] || ''}
                            onChange={(e) => updateQuantity(e, product.name)}
                            placeholder="Enter kg"
                        />
                        <a
                            href={`placeOrder.jsp?product=${product.name}&price=${product.price}&quantity=${quantity[product.name] || 1}`}
                            className="buy-button"
                        >
                            Buy Now
                        </a>
                    </div>
                ))}
            </section>

            <footer>
                <p>&copy; 2024 Support the Farmers. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Dairy;
