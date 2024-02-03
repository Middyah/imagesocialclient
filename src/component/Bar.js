import React, { useState } from 'react';
import './css/SearchBar.css';

const Bar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchTerm, category);
  };

  const categories = [
    'Accessories',
    'Clothing',
    'Footwear',
    'Ladies',
    'Men',
    'New Arrivals',
    'Sale',
  ];

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
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
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