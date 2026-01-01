import React from "react";
import { Link } from "react-router-dom";
import logo_img from "../assets/images/brand_logo.png"; 
import "../css/Navbar.css";
 

function Navbar() {
  return (
    <nav className="navbar">
    
      <div className="logo-section">
        <Link to="/">
          <img src={logo_img} alt="Brand Logo" className="brand-logo" />
        </Link>
      </div>

    
      <div className="logo-menu">
        <Link to="/home" className="menu">Home</Link>
        <Link to="/menu" className="menu">Menu</Link>
        <Link to="/location" className="location">Location</Link>
        <Link to="/about" className="about">About</Link>
        <Link to="/contact" className="contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
