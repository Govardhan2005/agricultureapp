import React, { useState } from 'react';

const Vegetables = () => {
    const [quantity, setQuantity] = useState('');

    const updateQuantity = (event, product) => {
        event.preventDefault();
        const quantityInput = event.target.previousElementSibling.value;
        setQuantity(quantityInput);
        // Updating the link dynamically
        const link = `${product.url}?product=${product.name}&price=${product.price}&quantity=${quantityInput}`;
        event.target.href = link;
    };

    return (
        <div style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", backgroundColor: "#f7f4f1", margin: 0, padding: 0, boxSizing: "border-box" }}>
            <nav style={{ backgroundColor: "#406343", display: "flex",width:"1473px", justifyContent: "space-between", alignItems: "center", padding: "10px 20px" }}>
                <div style={{ display: "flex", gap: "15px" }}>
                    <a href="/" style={{ color: "white", padding: "16px 22px", textDecoration: "none", fontWeight: "bold" }}>Home</a>
                    <a href="/farmers-info" style={{ color: "white", padding: "16px 22px", textDecoration: "none", fontWeight: "bold" }}>For Farmers</a>
                    <a href="/buyers-info" style={{ color: "white", padding: "16px 22px", textDecoration: "none", fontWeight: "bold" }}>For Buyers</a>
                    <a href="/admin" style={{ color: "white", padding: "16px 22px", textDecoration: "none", fontWeight: "bold" }}>Admin</a>
                    <a href="/contact" style={{ color: "white", padding: "16px 22px", textDecoration: "none", fontWeight: "bold" }}>Contact Us</a>
                </div>
                
            </nav>

            <section style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around", margin: "3rem auto", maxWidth: "1200px" }}>
                {[
                    { name: 'Tomatoes', price: '2.50', url: 'placeOrder.jsp', image: 'src/images/tomatoes.jpeg', description: 'Fresh organic tomatoes picked daily.' },
                    { name: 'Potatoes', price: '1.80', url: 'placeOrder.jsp', image: 'src/images/potatoes.jpeg', description: 'Locally grown potatoes, perfect for every dish.' },
                    { name: 'Carrots', price: '2.00', url: 'placeOrder.jsp', image: 'src/images/carrots.jpeg', description: 'Crisp carrots, great for snacking and cooking.' },
                    { name: 'Chili', price: '3.00', url: 'placeOrder.jsp', image: 'src/images/chili.jpeg', description: 'Spicy and fresh chilies to add heat to your dishes.' },
                    { name: 'Capsicum', price: '2.50', url: 'placeOrder.jsp', image: 'src/images/capsicum.jpeg', description: 'Crunchy capsicum, perfect for salads and stir-fries.' },
                    { name: 'Spinach', price: '2.20', url: 'placeOrder.jsp', image: 'src/images/spinach.jpeg', description: 'Nutritious spinach, great for salads and cooking.' },
                    { name: 'Radish', price: '1.50', url: 'placeOrder.jsp', image: 'src/images/radish.jpeg', description: 'Fresh radishes for a crunchy snack.' },
                ].map((product, index) => (
                    <div key={index} style={{ backgroundColor: "#fff", borderRadius: "12px", boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)", padding: "25px", width: "30%", marginBottom: "20px", textAlign: "center" }}>
                        <h3 style={{ color: "#406343" }}>{product.name}</h3>
                        <img src={product.image} alt={product.name} style={{ maxWidth: "100%", height: "auto" }} />
                        <p>{product.description}</p>
                        <div className="price" style={{ fontSize: "1.2rem", color: "#406343", margin: "10px 0" }}>Rs.{product.price} per kg</div>
                        <input type="number" className="quantity" min="1" placeholder="Enter kg" style={{ margin: "10px 0" }} />
                        <a 
                            href={product.url + '?product=' + product.name + '&price=' + product.price + '&quantity=' + quantity}
                            onClick={(e) => updateQuantity(e, product)}
                            className="buy-button"
                            style={{ backgroundColor: "#5b8a72", color: "white", border: "none", padding: "10px 15px", borderRadius: "5px", cursor: "pointer", fontWeight: "bold", textDecoration: "none", transition: "background-color 0.3s" }}
                        >
                            Buy Now
                        </a>
                    </div>
                ))}
            </section>

            <footer style={{ backgroundColor: "#5b8a72", color: "white", textAlign: "center", padding: "1.5rem 0", marginTop: "3rem", fontSize: "1rem" }}>
                <p>&copy; 2024 Support the Farmers. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Vegetables;
