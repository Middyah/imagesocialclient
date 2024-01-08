import './App.css';
import SearchBar from './component/Searchbar';
import LocationDropdown from './component/LocationDropdown';
import Navbar from './component/Navbar';
import { Route, Routes } from 'react-router-dom';
import ImageGalleryPage from './component/ImageGalleryPage'; // Import the ImageGalleryPage component

// Import other pages
import Home from './component/Home';
import MainArea from './component/ImageGalleryPage';
import Footer from './component/Footer';

function App() {
  return (
    <div>
      

      {/* Your other components here */}
      {/* <LocationDropdown />
      <SearchBar />
      <Imageupload />
      <Allrouting /> */}

      {/* Define routes using React Router */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mainarea" element={<MainArea />} />
        <Route path="/gallery" element={<ImageGalleryPage />} /> {/* Add this line */}
      </Routes>
      <Footer/>
    </div>
  );
}


export default App;