import React, { useEffect, useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
import { useNavigate } from 'react-router-dom';

export default () => {
  const navigate = useNavigate();
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 100;
  const options = [
    // "All",
    // "What's new",
    // "Product3",
    // "Service",
    // "Health",
    // "Education",
    // "Job",
    // "Lifestyle",
    // "Entertainment",
    // "Technology",
    // "Finance",
    // "Sports",
    // "Gaming",
    // "Real Estate",
    // "Others",
    // "Website Activity"

    { value: 'All1', label: 'All1' },
    { value: "What's new", label: "What's new" },
    { value: 1, label: 'Product4' },
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

  const cardStyle = {
    background: '#ffffff',
    width: '100%', // Set the width to 100% of the parent container
    height: '40px', // Set your preferred height
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    border: '1px solid #ccc', // Border color
    borderRadius: '25px', // Border radius
    // Additional CSS customization
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    transition: 'box-shadow 0.3s ease',
    margin: '5px',
  };

  const navButtonStyle = {
    background: '#fff',
    color: '#000',
    borderRadius: '50%', // Make the button fully round
    padding: '0 24 0 24',
    border: 'none',
    fontSize: '25px',
    cursor: 'pointer',
    marginLeft: '5px',
    marginRight: '5px',
  };

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust the breakpoint as needed
    };

    // Initial check and add event listener
    handleResize();
    window.addEventListener('resize', handleResize);

    // Clean up the event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  console.log(isMobile, "isMobile");

  return (
    <div style={{ padding: `0 ${chevronWidth}px` }} className='carousel'>
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={isMobile ? 3 : 3}
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
            style={cardStyle}
            key={index}
            onClick={() => navigate(`/mainarea?category=${index}`)}
          >
            <div className='itemitem'>{item}</div>
          </div>
        ))}
      </ItemsCarousel>
    </div>
  );
};
