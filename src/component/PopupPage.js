import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../component/css/PopupPage.css';

const PopupPage = () => {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [isBoxVisible, setIsBoxVisible] = useState(false);

  const handleArrowClick = () => {
    setIsBoxVisible(!isBoxVisible);
  };

  return (
    <div className="location-dropdown-container">
      <label htmlFor="country" className="dropdown-label" onClick={handleArrowClick} style={{ fontSize: '40px', cursor: 'pointer' }}>
        𓃑
      </label>
      {isBoxVisible && selectedCountry !== '𓃑' && (
        <div className="page-links-container">
          <div className="page-links-box">
            <Link to="/" className="page-link">Home</Link>
            <Link to="/mainarea" className="page-link">Product Information</Link>
            <Link to="/aboutus" className="page-link">About Us</Link> {/* Add this line for the About Us page */}
            <Link to="/contactus" className="page-link">Contact Us</Link>
            <Link to="/hiring" className="page-link">We are hiring</Link>
            <Link to="/share" className="page-link">Share & Earn</Link>
            {/* Add more page links as needed */}
          </div>
        </div>
      )}
    </div>
  );
};

export default PopupPage;
