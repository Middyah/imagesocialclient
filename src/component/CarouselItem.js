import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
import { useNavigate } from 'react-router-dom';
export default () => {
    const navigate=useNavigate()
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
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

  return (
    <div style={{ padding: `0 ${chevronWidth}px` ,width:"407px"}}>
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={2}
        gutter={20}
        leftChevron={<button>{'<'}</button>}
        rightChevron={<button>{'>'}</button>}
        outsideChevron
        chevronWidth={chevronWidth}
      >
        {options.map((item)=>(
 <div style={{  background: '#EEE',width:"fit-content",cursor:"pointer" }} onClick={()=> navigate(`/mainarea?category=${item}`)}>{item}</div>
        ))}

      </ItemsCarousel>
    </div>
  );
};