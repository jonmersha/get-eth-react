import React from 'react';
import logo from '../image/logo.png'; // Adjust the path to your logo

const AboutPage = () => {
  return (
    <section className="about-page py-5">
      <div className="container">
        <h2 className="text-center mb-5">About Us</h2>
        <div className="row align-items-center">
          {/* Image Column */}
          <div className="col-md-6 text-center">
            <img
              src={logo}
              alt="About Us"
              className="img-fluid mb-4"
              style={{ maxWidth: '300px', height: 'auto' }} // Adjust the size here
            />
          </div>
          {/* Text Column */}
          <div className="col-md-6">
            <h3>Who We Are</h3>
            <p>
              Get Ethiopia Tour is a leading travel company dedicated to providing unforgettable experiences in one of the world's most culturally rich and naturally diverse countries. Our mission is to connect travelers with Ethiopia's heritage, landscapes, and traditions.
            </p>
            <h3>Why Ethiopia?</h3>
            <p>
              Ethiopia is a land of ancient history, stunning landscapes, and vibrant cultures. From the rock-hewn churches of Lalibela to the Simien Mountains and the Omo Valley, Ethiopia offers something for every traveler.
            </p>
            <h3>Our Values</h3>
            <p>
              We are committed to sustainable travel, cultural respect, and community engagement. Our tours are designed to benefit local communities while providing authentic experiences for our guests.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;