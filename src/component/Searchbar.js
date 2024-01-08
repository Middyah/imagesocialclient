import React from 'react';
import logo from '../component/image/logo.png'
import '../component/css/Home.css';

const Searchbar = () => {
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
        />
        <br />
        <input type="submit" value="Click here" style={{ marginTop: '10px' }} />
      </form>
    </div>
  );
};

export default Searchbar;
