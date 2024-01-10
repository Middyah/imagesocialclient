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
            <Link to="./mainarea" className="page-link">Product Information</Link>
            {/* Add more page links as needed */}
          </div>
        </div>
      )}
    </div>
  );
};

export default PopupPage;
