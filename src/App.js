import { useState } from 'react';
import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import ImageGalleryPage from './component/ImageGalleryPage';
import Home from './component/Home';
import MainArea from './component/ImageGalleryPage';
import Footer from './component/Footer';
import AboutUsPage from './AboutUsPage';
import ContactUs from './component/ContactUs';
import Hiring from './component/Hiring';
import Share from './component/Share';
import Payment from './component/Payment';
import PosterMaking from './component/PosterMaking';
import Disclaimer from './component/Disclaimer'; // Import Disclaimer component
import NavbarPost from "./component/NavbarPost";
import React from 'react';

function App() {
  const location = useLocation();

  const [search, setSearch] = useState('');
  
  const onSearch2 = (a) => {
    console.log(a, "aman2");
    setSearch(a);
  };

  return (
    <div>
      {/* Define routes using React Router */}
      {(location.pathname === '/mainarea' || location.pathname === '/') && <NavbarPost onSearch2={onSearch2} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mainarea" element={<ImageGalleryPage category={localStorage.getItem('categorydata')} search={search} />} />
        <Route path="/gallery" element={<ImageGalleryPage search={search} />} />
        <Route path="/aboutus" element={<AboutUsPage />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/hiring" element={<Hiring />} />
        <Route path="/share" element={<Share />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/postermaking" element={<PosterMaking />} />
        <Route path="/disclaimer" element={<Disclaimer />} /> {/* Render the Disclaimer component */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
