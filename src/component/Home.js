import React, { useState } from 'react';
import logo from '../component/image/logo.png';
import '../component/css/Home.css';
import CarouselItem from './CarouselItem';
import { useNavigate } from 'react-router-dom';
import CustomNavbar from './CustomNavbar';

const Searchbar = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');

  const handleSearch = () => {
    navigate(`/mainarea?post_title=${title}`);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div>
      <CustomNavbar />
      <div style={{ textAlign: 'center', paddingTop: '100px' }}>
        <img
          className='logo_main'
          src={logo}
          alt="home"
          style={{ marginBottom: '20px', marginTop: '50px' }}
        />
        <form action="https://www.google.com/search" method="GET">
          <input
            type="text"
            name="q"
            placeholder="Search here"
            className='searchfield'
            onChange={(e) => setTitle(e.target.value)}
            onKeyDown={(e) => handleKeyPress(e)}
          />
          <button
            type="button"
            onClick={() => handleSearch()}
            style={{
              backgroundColor: 'blue',
              color: 'white',
              border: '2px solid white',
              padding: '10px 40px',
              borderRadius: '25px',
              cursor: 'pointer',
              marginLeft:'-80px'
            }}
          >
            Search
          </button>
          <br />
        </form>
        <div className='carousetitem'>
          <CarouselItem />
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
