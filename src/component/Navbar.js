import React from 'react';
import '../component/css/Navbar.css'; // Import your CSS file for Navbar styling
import LocationDropdown from './LocationDropdown'; // Import your LocationComponent

const Navbar = () => {

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <LocationDropdown />
        
         
        
      </div>
    </nav>
  );
};

export default Navbar;
