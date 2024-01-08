import React from 'react';
import '../component/css/Navbar.css'; // Import your CSS file for Navbar styling
import LocationDropdown from './LocationDropdown'; // Import your LocationComponent
import PopupPage from './PopupPage';

const Navbar = () => {

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <LocationDropdown />
        
         <PopupPage/>
        
      </div>
    </nav>
  );
};

export default Navbar;
