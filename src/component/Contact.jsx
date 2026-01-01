import React, { useState } from "react";
import "../css/contact.css"; // Make sure to create this CSS file

function Contact() {
  const [messageSent, setMessageSent] = useState(false);

  function notification() {
    setMessageSent(true); // show notification
    setTimeout(() => setMessageSent(false), 3000); // hide after 3 seconds
  }

  function handleSubmit(e) {
    e.preventDefault();
    notification();
    e.target.reset(); 
  }

  return (
    <div className="contact-us-container">
      <div className="contact-info">
        <h1 className="title">Contact Us</h1>
        <p className="text">
          We’d love to hear from you! Whether you have questions, feedback, or
          want to collaborate, feel free to reach out using the form below.
        </p>

        <div className="contact-details">
          <h2>Our Information</h2>
          <p>Email: support@nikeshop.com</p>
          <p>Phone: +1 234 567 890</p>
          <p>Address: 123 ,addi abeba,Ethiopia</p>
        </div>

        <form className="input-data" onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <input type="tel" placeholder="Phone" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
          {messageSent && (
          <div className="text-notify">
            Thank you! Your message has been sent.
          </div>
        )}
       {/* && means the messagesent is true then it excute the paragraph  */}

        <footer className="contact-footer">
          &copy; {new Date().getFullYear()} Nike Shop. All rights reserved.
        </footer>
      </div>
    </div>
  );
}

export default Contact;
