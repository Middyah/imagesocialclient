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
              <Link to="./" className="page-link">🔍</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
