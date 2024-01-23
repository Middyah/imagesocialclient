import React from 'react';
import '../component/css/Footer.css'; // Import your CSS file for Footer styling
// import ImageUpload from './Imageupload';
import {Link}  from 'react-router-dom';
import Upload from './Upload';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="center-container">
          <div className="footer-links">
            <div className='footerele'>
              {/* <ImageUpload /> */}
              <Upload/>
              <Link to='./'>🔍</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
