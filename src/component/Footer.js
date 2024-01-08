import React from 'react';
import '../component/css/Footer.css'; // Import your CSS file for Footer styling
import ImageUpload from './ImageUpload';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="center-container">
          <div className="footer-links">
            <div style={{ display: 'flex', alignItems: 'center',gap:'190px' }}>
              <ImageUpload />
              <a href="https://www.example-social.com" target="_blank" rel="noopener noreferrer">
                {/* Insert your second icon or image here */}
                🔍
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
