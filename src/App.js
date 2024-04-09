// App.js
import {useState} from 'react';
import './App.css';
import { Route, Routes , useLocation} from 'react-router-dom';
import ImageGalleryPage from './component/ImageGalleryPage';
import Home from './component/Home';
import MainArea from './component/ImageGalleryPage';
import Footer from './component/Footer';
import AboutUsPage from './AboutUsPage';
import ContactUs from './component/ContactUs';
import Hiring from './component/Hiring'; // Corrected import
import Share from './component/Share';
import Payment from './component/Payment';
import PosterMaking from './component/PosterMaking'
import NavbarPost from "./component/NavbarPost"
import React from 'react';
function App() {
  const location = useLocation();

  const [serch,setSearch]=useState('');
  const onSearch2=(a) =>{
    console.log(a,"aman2");
    setSearch(a)
  }
  return (
    <div>
      {/* Define routes using React Router */}
      {/* <NavbarPost/> */}
      {/* {location.pathname === '/mainarea' && <NavbarPost />} */}
      {(location.pathname === '/mainarea' || location.pathname === '/') && <NavbarPost onSearch2={onSearch2}/>}

      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/mainarea" element={<MainArea />} /> */}
        <Route
  // path="/mainarea"
  path="/mainarea"
  element={<ImageGalleryPage category={localStorage.getItem('categorydata')} serch={serch}/>}
/>
        <Route path="/gallery" element={<ImageGalleryPage serch={serch}/>} />
        <Route path="/aboutus" element={<AboutUsPage />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/hiring" element={<Hiring />} /> {/* Add this line for the Hiring page */}
        <Route path="/share" element={<Share />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/postermaking" element={<PosterMaking />} />
        <Route path="/disclaimer" element={<Disclaimer />} />

      </Routes>
      <Footer /> 
    </div>
  );
}

export default App;
