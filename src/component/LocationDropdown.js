import React, { useEffect, useState } from 'react';
import '../component/css/LocationDropdown.css'; // Import your CSS file for LocationDropdown styling
import { MultiSelect } from "react-multi-select-component";
const LocationDropdown = () => {
  const [selectedCountry, setSelectedCountry] = useState([]);

  const handleCountryChange = (e) => {
    setSelectedCountry(e)
    console.log(e,"logdata");
    // setSelectedCountry(e.target.value);
    
    // You can perform actions based on the selected country here
    // console.log('Selected Country:', e.target.value);
  };
  console.log(selectedCountry,"selectedCountry");
  let data=selectedCountry.map((item)=>item.value).toString()
useEffect(()=>{
  localStorage.setItem("location",data)
},[data])
  const countries = [
    
    'United States',
    'United Kingdom',
    'Canada',
    'Australia',
    'Pakistan',
    // Add more countries as needed
  ];
let countrydata=countries.map((item,index)=>{
  return{
    label:item,value:index
  }
})
  return (
    <div className="location-dropdown-container">
      <label htmlFor="country" className="dropdown-label">
        
      </label>
      <MultiSelect
                      options={countrydata}
                      value={selectedCountry}
                      onChange={setSelectedCountry}
                      labelledBy="Select a country"
                      className="multi_select_drp"
                      name="anonimize"
                      // hasSelectAll={selectedCountry.length > 1 ? true : false}
                      // overrideStrings={{
                      //   selectSomeItems: 'Select',
                      //   allItemsAreSelected: selectedCountry.length > 1 ? "All country are selected." : selectedCountry,
                      //   selectAll: 'Select a country',
                      //   search: 'Search',
                      // }}
                    />
      {/* <select id="country" value={selectedCountry} onChange={handleCountryChange} className="dropdown-select">
        {countries.map((country, index) => (
          <option key={index} value={index}>
            {country}
          </option>
        ))}
      </select> */}
    </div>
  );
};

export default LocationDropdown;
