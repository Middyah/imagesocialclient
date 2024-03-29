import React, { useEffect, useState } from 'react';
import '../component/css/LocationDropdown.css'; // Import your CSS file for LocationDropdown styling
import { MultiSelect } from "react-multi-select-component";
const LocationDropdown2 = () => {
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
  let locdata=localStorage.getItem("location")
useEffect(()=>{
  localStorage.setItem("location2",data)
},[data])
  // const countries = [
    
  //   'United States',
  //   'United Kingdom',
  //   'India',
  //   'Australia',
  //   'Pakistan',
  //   // Add more countries as needed
  // ];

  const countries = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cabo Verde',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Colombia',
    'Comoros',
    'Congo',
    'Costa Rica',
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'East Timor (Timor-Leste)',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Eswatini',
    'Ethiopia',
    'Fiji',
    'Finland',
    'France',
    'Gabon',
    'Gambia',
    'Georgia',
    'Germany',
    'Ghana',
    'Greece',
    'Grenada',
    'Guatemala',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Korea, North',
    'Korea, South',
    'Kosovo',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Montenegro',
    'Morocco',
    'Mozambique',
    'Myanmar (Burma)',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'North Macedonia',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Qatar',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Vincent and the Grenadines',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'South Sudan',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Sweden',
    'Switzerland',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Togo',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Vatican City',
    'Venezuela',
    'Vietnam',
    'Yemen',
    'Zambia',
    'Zimbabwe',
  ];
  
  // Add more countries as needed
  
let countrydata=countries.map((item,index)=>{
  return{
    label:item,value:index
  }
})

const countrydata2 = countries.filter((_, index) => Array(locdata).includes(index))
  .map((item,index) => ({ label: item, value: index }));
console.log(countrydata2,"countrydata2");
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

export default LocationDropdown2;
