import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../component/css/Navbar2.css';
import LocationDropdown from './LocationDropdown';
import PopupPage from './PopupPage';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      navigate(`/mainarea?post_title=${searchQuery}`);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="left-component">
          <LocationDropdown />
        </div>

        <div className="center-component">
          <input
            type="text"
            placeholder="Search here"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleSearch}
          />
        </div>

        <div className="right-component">
          <PopupPage/>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
