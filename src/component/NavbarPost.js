import React, { useState } from 'react';
import './css/Header.css'; // Update the CSS file import
import LocationDropdown from './LocationDropdown';
import PopupPage from './PopupPage';
import logo from './image/logo.png';
import Bar from './Bar';
import LocationDropdown2 from './LocationDropdown2';
import {Route, Link, Routes, useLocation} from 'react-router-dom';
const Header = ({onSearch2}) => {
  const location = useLocation();
  const pathname = location.pathname;
console.log(pathname,"pathname");


const onSearch=(a) =>{
  console.log(a,"aman");
  onSearch2(a)
}
  return (
    <>

    <nav className={pathname==="/home"?"":"header"}> 
      <div className={pathname==="/home"?"custom-navbar-content":"header-content"}> 
        <div className={pathname==="/home"?"custom-left-component":"left-component"}>  
        {/* {pathname==="/"? <LocationDropdown />:<LocationDropdown2/>} */}
        <LocationDropdown/>
        </div>

{pathname!=="/home"&&(
  <div className="center-component">
          <img
            className='logo_main'
            src={logo}
            alt="home"
            style={{ marginBottom: '20px', marginTop: '50px' }}
          />
        </div>

)}
        
        <div className={pathname==="/home"?"custom-right-component":"right-component"}>
          <PopupPage />
        </div>

        {pathname!=="/home"&&(
        <div className="additional-component">
          <Bar onSearch={onSearch}/>
        </div>
        )}

      </div>
    </nav>
    </>
   
  );
};

export default Header;
