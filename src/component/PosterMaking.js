import React from 'react';
import './css/Payment.css'; // Import your CSS file for styling
import CustomNavbar from './CustomNavbar';
import QR from './image/WhatsApp Image 2024-01-30 at 21.07.40_2d732c7e.jpg';

const Payment = () => {
    return (
        <div>
            <CustomNavbar />
            <div className="payment-container">
                <div className="payment-box">
                    <h2>Discover the excitement! Poster Making starts from just Rs. 99/-
                    </h2>
                </div>
                {/* First div with an image */}
                <div className="payment-box">
                    <img src={QR} alt="Payment QR Code" />
                </div>

                {/* Rest of the divs with text */}
                <div className="payment-box">
                    <h2>
                        Pay UPI <br />
                        UPI ID: pritamadhikari33-1@okhdfcbank
                    </h2>
                </div>
                <div className="payment-box">
                    <h2>Pay Mobile number<br /> +919038944986</h2>
                </div>
                <div className="payment-box">
                    <h2>Bank TransferAccount <br />
                        Name: Pritam Adhikari<br />
                        Account Number: 4445811429<br />
                        IFSC: KKBK0000329<br />
                        Branch Name: Narendrapur</h2>
                </div>
                {/* <div className="payment-box">
          <h2>Payment Method 4</h2>
        </div>
        <div className="payment-box">
          <h2>Payment Method 5</h2>
        </div> */}
            </div>
        </div>
    );
};

export default Payment;
