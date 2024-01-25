import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../component/css/Navbar2.css';
import LocationDropdown from './LocationDropdown';
import PopupPage from './PopupPage';
import CarouselItems from './CarouselItems';  // Import CarouselItem component
import logo from './image/logo.png';

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
          {/* Corrected img tag */}
          <img
            className='logo_main'
            src={logo}
            alt="home"
            style={{ marginBottom: '20px', marginTop: '50px' }}
          />
          <div className="search-container" style={{ display: 'flex', alignItems: 'center' }}>
            <input
              type="text"
              placeholder="Search here"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleSearch}
              style={{ marginRight: '-100px', width: '800px' }}
            />
            <button
              type="button"
              onClick={() => handleSearch()}
              style={{
                backgroundColor: 'blue',
                color: 'white',
                border: '0px solid white',
                padding: '10px 40px',
                borderRadius: '25px',
                cursor: 'pointer',
              }}
            >
              Search
            </button>
          </div>

          {/* Include the CarouselItem component here */}
          <CarouselItems />
        </div>

        <div className="right-component">
          <PopupPage />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
