import React from 'react';
import './css/Disclaimer.css';
import CustomNavbar from './CustomNavbar';

const Disclaimer = () => {
    return (
        <div>
            <CustomNavbar />
            <div className="contact-us-container">
                <div className="disclaimer-box">
                    <p>The information provided on this website is for general informational purposes only. We make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability or availability with respect to the website or the information, products, services or related graphics contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk.

                        In no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage or any loss or damage whatsoever arising from loss of data or profits. </p>
                    

                </div>
            </div>
        </div>
    );
};

export default Disclaimer;
