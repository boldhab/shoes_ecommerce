import React from "react";
import "../css/About.css";// Make sure to create this CSS file
import aboutImage from "../assets/images/brand_logo.png";
import yab from "../assets/images/yab.jpg";
import sam from "../assets/images/sam.jpg"; 
import john from "../assets/images/john.jpg";// Optional hero image

function About() {
  return (
    <div className="about-page">
    
      <section className="hero">
        <img src={aboutImage} alt="About Hero" className="hero-image" />
        <h1>About Nike Shop</h1>
        <p>Your destination for stylish, comfortable, and high-quality shoes.</p>
      </section>

      
      <section className="our-story">
        <h2>Our Story</h2>
        <p>
          Founded in 2024, Nike Shop is dedicated to bringing the latest
          trends and high-quality shoes right to your doorstep. From sneakers
          to heels, we provide shoes that combine comfort and style for every
          step of your journey.
        </p>
      </section>

      
      <section className="mission-values">
        <h2>Our Mission & Values</h2>
        <ul>
          <li>Deliver high-quality shoes for everyone.</li>
          <li>Trendy and comfortable designs for all lifestyles.</li>
          <li>Customer satisfaction is our top priority.</li>
          <li>Fast delivery and easy shopping experience.</li>
        </ul>
      </section>

      
      <section className="team">
        <h2>Meet the Team</h2>
        <div className="team-cards">
          <div className="team-member">
            <img src={john} />
            <h3>John Doe</h3>
            <p>Founder & CEO</p>
          </div>
          <div className="team-member">
            <img src={yab} />
            <h3>yabsra takele</h3>
            <p>Lead Designer</p>
          </div>
          <div className="team-member">
            <img src={sam} />
            <h3>Samuel alex</h3>
            <p>Marketing Head</p>
          </div>
        </div>
      </section>

     
      <section className="cta">
        <button onClick={() => window.location.href = "/menu"}>Shop Now</button>
      </section>

    
      <footer className="about-footer">
        &copy; {new Date().getFullYear()} Nike Shop. All rights reserved.
      </footer>
    </div>
  );
}

export default About;
