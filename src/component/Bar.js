import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/SearchBar.css';

const Bar = ({ onSearch }) => {


  const searchParams = new URLSearchParams(document.location.search)
  let category1 = searchParams.get('category')
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState(category1);
  const navigate=useNavigate()
console.log(category,"category");
  const handleSearch = (e) => {
    // onSearch(searchTerm, category);
  };
  useEffect(()=>{
    onSearch(searchTerm);
  },[searchTerm])

  console.log(searchTerm,"category1",category);
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

    { value: 0, label: 'All' },
    { value: 15, label: "What's new" },
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
    // localStorage.setItem("categorydata",e.target.value)
    navigate(`/mainarea?category=${e.target.value}`)
    // localStorage.setItem("category",e.target.value)
  }
  useEffect(()=>{
    localStorage.setItem("categorydata",category)
  },[category])
  return (
    <div className="search-bar">
      
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
        <button onClick={handleSearch} type="submit">Search</button>
      
    </div>
  );
};

export default Bar;