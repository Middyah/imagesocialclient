import React from 'react';
import './css/ContactUs.css';
import CustomNavbar from './CustomNavbar';

const ContactUs = () => {
    return (
        <div>
            <CustomNavbar />
            <div className="contact-us-container">
                <div className="contact-box">
                    <h2>Kaushik Middya</h2>
                    <a href="tel:+919875686483">(+91) 98756 86483</a>
                    <p>Timings: 11:00 am – 10:00 pm <br/> (Mon – Fri)</p>
                    
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
