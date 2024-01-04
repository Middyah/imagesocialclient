import React, { useState } from 'react';
import logo from '../component/image/logo.png'
import '../component/css/Home.css';
import Upload from './Imageupload';
import Imageupload from './Imageupload';
import CarouselItem from './CarouselItem';
import { useNavigate } from 'react-router-dom';


const Searchbar = () => {
  const navigate=useNavigate()
  const[title,setTitle]=useState("")
  const handleSearch=(e)=>{
    if (e.key === "Enter")
    navigate(`/mainarea?post_title=${title}`)
  }
  return (
    <div style={{ textAlign: 'center', paddingTop: '100px' }}>
     <img className='logo_main'
  src={logo} // Assuming 'home' is a variable containing the image URL
  alt="home"
  style={{ marginBottom: '20px' }}
/>
      <form action="https://www.google.com/search" method="GET">
        <input
          type="text"
          name="q"
          placeholder="Search here"
          style={{
            width: '400px',
            padding: '10px',
            fontSize: '16px',
            borderRadius: '5px',
            border: '1px solid #ccc',
          }}
          onChange={(e)=>setTitle(e.target.value)}
          onKeyDown={(e)=>handleSearch(e)}
          // onKeyPress={(e) => handleSearch(e)}
        />
        <br />
        {/* <input type="submit" value="Click here" style={{ marginTop: '10px' }} /> */}
      </form>
      <div className='carousetitem'>
      <CarouselItem/>
      </div>
       
      <Imageupload/>
    </div>
  );
};

export default Searchbar;

