import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/SearchBar.css';

const Bar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');
  const navigate=useNavigate()
console.log(category,"category");
  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchTerm, category);
  };

  const categories = [
     'Product',
     'Service',
     'Health',
     'Education',
     'Job',
     'Lifestyle',
     'Entertainment',
     'Technology',
     'Finance',
     'Sports',
     'Real Estate',
     'Others',
     'Website Activity',
  ];

  const handleCategory=(e)=>{
    setCategory(e.target.value)
    navigate(`/mainarea?category=${e.target.value}`)
    // localStorage.setItem("category",e.target.value)
  }
  return (
    <div className="search-bar">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          value={category}
          onChange={(e) => handleCategory(e)}
        >
          <option value="">All Categories</option>
          {categories.map((category,index) => (
            <option key={category} value={index}>
              {category}
            </option>
          ))}
        </select>
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Bar;