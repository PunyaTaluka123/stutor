import React from 'react';
import './HeroSection.css';
import owl from '../assets/Stutor Logo.jpg'; // Example import if your image is in assets

function HeroSection() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>STUTOR</h1>
        <p>
          Add a little bit of body textAdd a little bit of body textAdd a little bit
          of body textAdd a little bit of body textAdd a little bit of body textAdd
          a little bit of body text
        </p>
      </div>

      <div className="hero-image">
        <img src={owl} alt="Owl with graduation cap" />
      </div>
    </section>
  );
}

export default HeroSection;
