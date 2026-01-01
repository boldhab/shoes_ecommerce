import React from "react";
import shopelogo from "../assets/images/hero-image.png"; 
import "../css/Home.css";

function Home() {
  return (
    <div className="home-container">
      {/* ADD THIS WRAPPER DIV */}
      <div className="main-content">
        <div className="discription-area">
          <h1 className="title">Welcome to Nike Shop!</h1>
          <p className="text-area">
            Step into style with our trendy, comfortable, and high-quality shoes. 
            From sneakers to heels, find your perfect pair and enjoy easy shopping 
            with fast delivery! Explore the latest trends, enjoy exclusive deals, 
            and let your shoes do the talking—because every step matters.
          </p>
          <div className="button-section">
            <button>Shop now</button>
            <button>Category</button>
          </div>
        </div>

        <div className="logos">
          <img src={shopelogo} alt="Shoe Logo" />
        </div>
      </div>
      

      <footer className="home-footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>About Nike Shop</h3>
            <p>Your one-stop destination for stylish and comfortable shoes. Stay trendy and step up your game.</p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/menu">Menu</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact</h3>
            <p>Email: support@nikeshop.com</p>
            <p>Phone: +1 234 567 890</p>
            <p>Address: 123 ,addi abeba,Ethiopia</p>
          </div>
        </div>

        <div className="footer-bottom">
          &copy; {new Date().getFullYear()} Nike Shop. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default Home;