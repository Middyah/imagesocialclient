import React, { useState } from 'react';
import './css/Header.css'; // Update the CSS file import
import LocationDropdown from './LocationDropdown';
import PopupPage from './PopupPage';
import logo from './image/logo.png';
import Bar from './Bar';

const Header = () => {


  return (
    <nav className="header"> {/* Update the class name here */}
      <div className="header-content"> {/* Update the class name here */}
        <div className="left-component">
          <LocationDropdown />
        </div>

        <div className="center-component">
          <img
            className='logo_main'
            src={logo}
            alt="home"
            style={{ marginBottom: '20px', marginTop: '50px' }}
          />
        </div>

        <div className="right-component">
          <PopupPage />
        </div>

        {/* Add one more div under the existing three */}
        <div className="additional-component">
          <Bar />
        </div>
      </div>
    </nav>
  );
};

export default Header;
