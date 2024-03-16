import React, { useEffect, useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
import { useNavigate } from 'react-router-dom';
import './css/carousalitem.css';

export default () => {
  const navigate = useNavigate();
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 70;
  const options = [
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

  const navButtonStyle = {
    background: '#fff',
    color: '#000',
    borderRadius: '50%',
    padding: '15px',
    border: 'none',
    fontSize: '25px',
    cursor: 'pointer',
    marginLeft: '5px',
    marginRight: '5px',
  };

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust breakpoint as needed
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [])

  const handleCategoryClick = (category) => {
    const selectedCategory = category === "All" || category === "What's new" ? 0 : category;
    navigate(`/mainarea?category=${selectedCategory}`);
  };

  return (
    <div style={{ padding: `0 ${chevronWidth}px` }} className='carousel'>
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={isMobile ? 3 : 5} // Adjust number of cards based on viewport width
        gutter={10}
        leftChevron={<button style={navButtonStyle}>{'<'}</button>}
        rightChevron={<button style={navButtonStyle}>{'>'}</button>}
        outsideChevron
        chevronWidth={chevronWidth}
        style={{ overflow: 'hidden' }}
      >
        {options.map((item, index) => (
          <div
            className='carouselitem'
            key={item.value}
            onClick={() => handleCategoryClick(item.value)}
          >
            <div className='itemitem'>{item.label}</div>
          </div>
        ))}
      </ItemsCarousel>
    </div>
  );
};
