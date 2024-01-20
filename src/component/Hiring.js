import React from 'react';
import './css/ContactUs.css';
import Navbar from './Navbar';

const ContactUs = () => {
    return (
        <div>
            <Navbar />
            <div className="contact-us-container">
                <div className="contact-box">
                    <h2>Pritam Adhikari</h2>
                    <a href="tel:+919038944986">(+91) 90389 44986</a>
                    <p>Timings: 11:00 am – 10:00 pm <br/> (Mon – Fri)</p>
                    
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
