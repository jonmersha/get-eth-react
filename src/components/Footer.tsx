import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          {/* About Us Section */}
          <div className="col-md-4">
            <h5>About Us</h5>
            <p>Get Ethiopia Tour is your gateway to unforgettable adventures, rich culture, and breathtaking landscapes.</p>
          </div>

          {/* Quick Links Section */}
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="index.html">Home</a></li>
              <li><a href="about.html">About Us</a></li>
              <li><a href="tours.html">Tour Packages</a></li>
              <li><a href="destinations.html">Destinations</a></li>
              <li><a href="blog.html">Blog</a></li>
              <li><a href="contact.html">Contact</a></li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <p>Email: info@getethiopiatour.com</p>
            <p>Phone: +251 123 456 789</p>
          </div>
        </div>

        {/* Horizontal Line */}
        <hr />

        {/* Copyright Section */}
        <p className="text-center">&copy; 2023 Get Ethiopia Tour. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;