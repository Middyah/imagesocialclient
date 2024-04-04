// PopupPage.js

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
      <label
        htmlFor="country"
        className="dropdown-label"
        onClick={handleArrowClick}
        // style={{ fontSize: '4vw', cursor: 'pointer' }} // Use viewport width for responsive font size
      >
        𓃑
      </label>
      {isBoxVisible && selectedCountry !== '𓃑' && (
        <div className="page-links-container">
          <div className="page-links-box">
            <Link to="/aboutus" className="page-link">About Us</Link>
            <Link to="/contactus" className="page-link">Contact Us</Link>
            <Link to="/hiring" className="page-link">We are hiring</Link>
            <Link to="/share" className="page-link">Share & Earn</Link>
            <Link to="/payment" className="page-link">Payment</Link>
            <Link to="/postermaking" className="page-link">Poster Making</Link>
            <Link to="/disclaimer" className="page-link">Disclaimer</Link>

          </div>
        </div>
      )}
    </div>
  );
};

export default PopupPage;
