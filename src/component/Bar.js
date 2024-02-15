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
    //  'Product1',
    //  'Service',
    //  'Health',
    //  'Education',
    //  'Job',
    //  'Lifestyle',
    //  'Entertainment',
    //  'Technology',
    //  'Finance',
    //  'Sports',
    //  'Real Estate',
    //  'Others',
    //  'Website Activity',

    { value: 0, label: 'All1' },
    { value: 0, label: "What's new" },
    { value: 1, label: 'Product' },
    { value: 2, label: 'Service' },
    { value: 3, label: 'Health' },
    { value: 4, label: 'Education' },
    { value: 5, label: 'Job' },
    { value: 6, label: 'Lifestyle' },
    { value: 7, label: 'Entertainment' },
    { value: 8, label: 'Technology' },
    { value: 9, label: 'Finance' },
    { value: 10, label: 'Sports' },
    { value: 11, label: 'Gaming' },
    { value: 12, label: 'Real Estate' },
    { value: 13, label: 'Others' },
    { value: 14, label: 'Website Activity' },
  ];

  const handleCategory=(e)=>{
    setCategory(e.target.value)
    localStorage.setItem("categorydata",e.target.value)
    // navigate(`/mainarea?category=${e.target.value}`)
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
            <option key={category.value} value={category.value}>
              {category.label}
            </option>
          ))}
        </select>
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Bar;