import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/SearchBar.css';

const Bar = ({ onSearch }) => {
  const searchParams = new URLSearchParams(document.location.search)
  let category1 = searchParams.get('category')
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState(category1);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    // onSearch(searchTerm, category);
  };

  useEffect(() => {
    onSearch(searchTerm);
  }, [searchTerm]);

  const categories = [
    { value: 0, label: 'All' },
    { value: 15, label: "What's new" },
    { value: 1, label: 'Product' },
    { value: 2, label: 'Service' },
    { value: 16, label: 'Government' },
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

  const handleCategory = (e) => {
    setCategory(e.target.value);
    navigate(`/mainarea?category=${e.target.value}`);
  };

  useEffect(() => {
    localStorage.setItem("categorydata", category);
  }, [category]);

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button
        className="search-button"
        onClick={handleSearch}
        type="submit"
        style={{ padding: '9px 20px' }} // Adjust padding to 9px
      >
        Search
      </button>
      <select
        className="category-dropdown"
        value={category}
        onChange={(e) => handleCategory(e)}
      >
        <option value="">All Categories</option>
        {categories.map((category, index) => (
          <option key={category.value} value={category.value}>
            {category.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Bar;
