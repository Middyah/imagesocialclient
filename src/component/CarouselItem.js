import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
import { useNavigate } from 'react-router-dom';

export default () => {
  const navigate = useNavigate();
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 70;
  const options = [
    "All",
    "What's new",
    "Product",
    "Service",
    "Health",
    "Education",
    "Job",
    "Lifestyle",
    "Entertainment",
    "Technology",
    "Finance",
    "Sports",
    "Real Estate",
    "Others",
    "Website Activity"
  ];

  const cardStyle = {
    background: '#ffffff',
    width: '150px', // Set your preferred width
    height: '40px', // Set your preferred height
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    border: '1px solid #ccc', // Border color
    borderRadius: '25px', // Border radius
  };

  const navButtonStyle = {
    background: '#fff', // Set your preferred background color
    color: '#000', // Set your preferred text color
    borderRadius: '50%', // Make the border round
    padding: '15px',
    border:'none',
    fontSize: '25px',
    cursor: 'pointer',
    marginLeft: '5px',
    marginRight: '5px',
  };
  
  return (
    <div style={{ padding: `0 ${chevronWidth}px`, width: '62%',  }}>
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={5}
        gutter={10}
        leftChevron={<button style={navButtonStyle}>{'<'}</button>}
        rightChevron={<button style={navButtonStyle}>{'>'}</button>}
        outsideChevron
        chevronWidth={chevronWidth}
        style={{ overflow: 'hidden' }} // Ensure the carousel is not affected by surrounding elements
      >
        {options.map((item, index) => (
          <div
            key={index}
            style={cardStyle}
            onClick={() => navigate(`/mainarea?category=${item}`)}
          >
            {item}
          </div>
        ))}
      </ItemsCarousel>
    </div>
  );
};
