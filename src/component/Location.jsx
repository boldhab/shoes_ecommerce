import React from "react";
import "../css/location.css"; // Make sure to create this file
import storeImage from "../assets/images/store-location.jpg"; // Optional static image

function Location() {
  return (
    <div className="location-page">
      {/* Header Section */}
      <section className="location-hero">
        <h1>Find Us</h1>
        <p>
          Visit our store or explore our branches to experience Nike’s latest
          collections in person.
        </p>
      </section>

      {/* Map Section */}
      <section className="map-section">
        {/* You can use Google Maps Embed */}
        <iframe
          title="Nike Shop Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.843821407799!2d144.95373541568825!3d-37.81627974202157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f0f05b5f%3A0x5045675218ce6e0!2sNike%20Store!5e0!3m2!1sen!2sus!4v1696353235356!5m2!1sen!2sus"
          allowFullScreen=""
          loading="lazy"
          className="map-frame"
        ></iframe>
      </section>

      {/* Store Info Section */}
      <section className="store-info">
        <div className="store-details">
          <h2>Our Main Store</h2>
          <p><strong>Address:</strong> 123 Shoe Street, Fashion City, USA</p>
          <p><strong>Phone:</strong> +1 (234) 567-890</p>
          <p><strong>Email:</strong> store@nikeshop.com</p>
          <p><strong>Hours:</strong> Mon - Sat: 9 AM - 8 PM | Sun: 10 AM - 6 PM</p>
          <button
            className="directions-button"
            onClick={() =>
              window.open(
                "https://www.google.com/maps/dir/?api=1&destination=123+Shoe+Street,+Fashion+City",
                "_blank"
              )
            }
          >
            Get Directions
          </button>
        </div>

        <div className="store-image">
          <img src={storeImage} alt="Nike Store" />
        </div>
      </section>

      {/* Footer */}
      <footer className="location-footer">
        &copy; {new Date().getFullYear()} Nike Shop. All rights reserved.
      </footer>
    </div>
  );
}

export default Location;
