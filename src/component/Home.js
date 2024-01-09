import React, { useState } from 'react';
import logo from '../component/image/logo.png';
import '../component/css/Home.css';
import CarouselItem from './CarouselItem';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const Searchbar = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');

  const handleSearch = (e) => {
    if (e.key === 'Enter') navigate(`/mainarea?post_title=${title}`);
  };

  return (
    <div>
    <Navbar />
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
            className='searchinput'
           
            onChange={(e) => setTitle(e.target.value)}
            onKeyDown={(e) => handleSearch(e)}
          />
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
