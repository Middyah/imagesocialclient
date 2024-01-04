import React, { useState } from 'react';

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
    'pakistan'
    // Add more countries as needed
  ];

  return (
    <div style={{ textAlign: 'left', marginTop: '50px' }}>
      <label htmlFor="country">Select Country: </label>
      <select id="country" value={selectedCountry} onChange={handleCountryChange}>
        {countries.map((country, index) => (
          <option key={index} value={country}>
            {country}
          </option>
        ))}
      </select>
      <p>Selected Country: {selectedCountry}</p>
    </div>
  );
};

export default LocationDropdown;
