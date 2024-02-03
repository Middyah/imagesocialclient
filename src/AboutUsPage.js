// AboutUsPage.js
import React from 'react';
import './component/css/AboutUsPage.css';
import CustomNavbar from './component/CustomNavbar';
import imageB from './images/ad120e39-3f9b-4668-94bd-21432f876620.jpeg';
import imageC from './images/ab4e101b-cf9e-4572-94b9-978c8ae81dd9.jpeg';

const AboutUsPage = () => {
  return (
    <div>
      <CustomNavbar />
      <div className="about-us-container">
        <div className="sectiona">
          <h2 className="about-us-title">We provide information on all products, businesses, and services for potential consumers worldwide and help people get knowledge of new products coming into the world.</h2>
        </div>
        <div className='main'>
          <div className="sectionb">
            <img src={imageB} alt="Section B Image" style={{ maxWidth: '100%' }} />
            <h2 className="about-us-title">FOUNDER<br/>
              Mr. Kaushik Middya<br />
              CEO , CMO <br />
              <a href="tel:+919875686483">☎(+91) 98756 86483</a><br />
              <a href="mailto:kaushikmidddya@gmail.com">✉kaushikmidddya@gmail.com</a>
            </h2>
          </div>

          <div className="sectionc">
            <img src={imageC} alt="Section C Image" style={{ maxWidth: '100%' }} />
            <h2 className="about-us-title">CO-FOUNDER<br/>
              Mr. Pritam Adhikari<br />
              COO , CTO <br />
              <a href="tel:+919038944986">☎(+91) 90389 44986</a><br />
              <a href="mailto:officialpritamadhikari@gmail.com">✉officialpritamadhikari@gmail.com</a>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
