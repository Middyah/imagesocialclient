import React from 'react';
import '../component/css/Navbar.css'; // Import your CSS file for Navbar styling
import LocationDropdown from './LocationDropdown'; // Import your LocationComponent
import PopupPage from './PopupPage';

const Navbar = () => {
  return (
    <nav className="navbar1">
      <div className="navbar-content">
        <div className="left-component">
          <LocationDropdown />
        </div>
        <div className="right-component">
          <PopupPage />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
