import React from 'react';
import '../component/css/CustomNavbar.css'; // Update your CSS file for Navbar styling
import CustomLocationDropdown from './LocationDropdown'; // Update your LocationComponent
import CustomPopupPage from './PopupPage';

const Navbar = () => {
  return (
    <div className="custom-navbar-content">
      <div className="custom-left-component">
        <CustomLocationDropdown />
      </div>
      <div className="custom-right-component">
        <CustomPopupPage />
      </div>
    </div>
  );
};

export default Navbar;
