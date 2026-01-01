import React, { useState } from "react";
import "../css/Menu.css";
import product1 from "../assets/images/product1.jpg";
import product2 from "../assets/images/product2.jpg";
import product3 from "../assets/images/product3.jpg";
import product4 from "../assets/images/product4.jpg";
import product5 from "../assets/images/product5.jpg";
import product6 from "../assets/images/product6.jpg";

function Menu() {
  const [searchTerm, setSearchTerm] = useState("");
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const products = [
    { id: 1, name: "Air Max Sneakers", description: "Comfortable & trendy sneakers.", price: 120, image: product1 },
    { id: 2, name: "Running Shoes", description: "Lightweight shoes for your daily run.", price: 100, image: product2 },
    { id: 3, name: "Casual Shoes", description: "Stylish shoes perfect for casual outings.", price: 90, image: product3 },
    { id: 4, name: "Sports Shoes", description: "Durable shoes for sports activities.", price: 130, image: product4 },
    { id: 5, name: "Basketball Shoes", description: "High-performance shoes for basketball.", price: 140, image: product5 },
    { id: 6, name: "Walking Shoes", description: "Comfortable shoes for walking and hiking.", price: 110, image: product6 },
  ];

  const filteredProducts = searchTerm
    ? products.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : products;

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const updateQuantity = (id, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="menu-page">
      {/* Top Navbar */}
      <div className="top-navbar">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button>Search</button>
        </div>
        <button className="cart-button" onClick={() => setShowCart(!showCart)}>
          Cart ({cart.length})
        </button>
      </div>

      {/* Hero Section */}
      <section className="menu-hero">
        <h1>Our Collection</h1>
        <p>Explore our latest shoes and find your perfect pair.</p>
      </section>

      {/* Product Grid */}
      <section className="product-grid">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <span className="price">${product.price}</span>
            <button className="add-to-cart" onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </section>

      {/* Cart Modal */}
      {showCart && (
        <div className="cart-modal">
          <h2>Your Cart</h2>
          {cart.length === 0 ? (
            <p>No items in cart.</p>
          ) : (
            <div className="cart-items">
              {cart.map((item) => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} />
                  <div className="cart-item-info">
                    <h4>{item.name}</h4>
                    <p>${item.price}</p>
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
                    />
                    <button onClick={() => removeFromCart(item.id)}>Remove</button>
                  </div>
                </div>
              ))}
              <h3>Total: ${totalPrice}</h3>
              <button className="payment-button" onClick={() => alert("Proceeding to payment...")}>
                Proceed to Payment
              </button>
            </div>
          )}
        </div>
      )}

      {/* Footer */}
      <footer className="menu-footer">
        &copy; {new Date().getFullYear()} Nike Shop. All rights reserved.
      </footer>
    </div>
  );
}

export default Menu;
