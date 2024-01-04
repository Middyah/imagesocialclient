// import React from 'react';
// import '../component/css/Navbar.css'; // Import your CSS file for Navbar styling
// import { Link } from 'react-router-dom';


// const Navbar = () => {
//   return (
  
//     <nav className="navbar">
//       <ul className="nav-links">
//         {/* <li><a href="#">Home</a></li> */}

//         {/* <li><Link to='/home'>Home</Link></li> */}
//         <li><a href="./home.js">Upload</a></li>
//         <li><a href="#">Services</a></li>
//         <li><a href="#">Contact</a></li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';
import '../component/css/Navbar.css'; // Import your CSS file for Navbar styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/mainarea">Upload</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li> 
      </ul>
    </nav>
  );
};

export default Navbar;

