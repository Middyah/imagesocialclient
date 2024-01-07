import React, { useState } from 'react';
import '../component/css/LocationDropdown.css'; // Import your CSS file for LocationDropdown styling

const LocationDropdown = () => {
  const [selectedCountry, setSelectedCountry] = useState('');

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
    // You can perform actions based on the selected country here
    console.log('Selected Country:', e.target.value);
  };

  const countries = [
    'Select a country',
    'United States',
    'United Kingdom',
    'Canada',
    'Australia',
    'Pakistan',
    // Add more countries as needed
  ];

  return (
    <div className="location-dropdown-container">
      <label htmlFor="country" className="dropdown-label">
        Select Country:
      </label>
      <select id="country" value={selectedCountry} onChange={handleCountryChange} className="dropdown-select">
        {countries.map((country, index) => (
          <option key={index} value={country}>
            {country}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LocationDropdown;
