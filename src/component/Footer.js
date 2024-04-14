import React , { useRef } from 'react';
import '../component/css/Footer.css'; // Import your CSS file for Footer styling
// import ImageUpload from './Imageupload';
import {Link}  from 'react-router-dom';
import Upload from './Upload';


const Footer = () => {
  const inputRef = useRef(null);

  const handleSearchIconClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="center-container">
          <div className="footer-links">
            <div className='footerele'>
              {/* <ImageUpload /> */}
              <Upload/>
              {/* <Link to='./'onClick={handleSearchIconClick}>🔍</Link> */}
              <Link to='./home'onClick={handleSearchIconClick}>🔍</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
