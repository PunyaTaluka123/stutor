import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import './LandingPage.css'; // optional, for any extra overall styling

function LandingPage() {
  return (
    <div className="landing-page">
      <Header />
      <HeroSection />
      {/* You can add more sections here, e.g. "About" or "Features" */}
      <footer className="footer" id="login">
        {/* Just a simple placeholder footer */}
        <p>© {new Date().getFullYear()} STUTOR</p>
      </footer>
    </div>
  );
}

export default LandingPage;
