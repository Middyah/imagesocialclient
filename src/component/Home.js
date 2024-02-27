import React, { useState } from 'react';
import logo from '../component/image/logo.png';
import '../component/css/Home.css';
import CarouselItem from './CarouselItem';
import { useNavigate } from 'react-router-dom';
import CustomNavbar from './CustomNavbar';
import NavbarPost from "./NavbarPost"
const Searchbar = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [productname, setProductname] = useState('');
  const handleSearch = () => {
    // navigate(`/mainarea?post_title=${title}`);
    navigate(`/mainarea?Productname=${productname}&category=0`);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  localStorage.removeItem("categorydata")


  return (
    <div>
      {/* <CustomNavbar /> */}
      {/* <NavbarPost/> */}
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
            onChange={(e) => setProductname(e.target.value)}
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
              marginLeft: '-80px',
              transition: 'background-color 0.3s ease', // Add a transition for a smooth effect
              // Hover style
              ':hover': {
                backgroundColor: 'pink', // Change to the desired hover background color
              },
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
