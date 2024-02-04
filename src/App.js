// App.js
import './App.css';
import { Route, Routes } from 'react-router-dom';
import ImageGalleryPage from './component/ImageGalleryPage';
import Home from './component/Home';
import MainArea from './component/ImageGalleryPage';
import Footer from './component/Footer';
import AboutUsPage from './AboutUsPage';
import ContactUs from './component/ContactUs';
import Hiring from './component/Hiring'; // Corrected import
import Share from './component/Share';
import Payment from './component/Payment';
import PosterMaking from './component/PosterMaking'

function App() {
  return (
    <div>
      {/* Define routes using React Router */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mainarea" element={<MainArea />} />
        <Route path="/gallery" element={<ImageGalleryPage />} />
        <Route path="/aboutus" element={<AboutUsPage />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/hiring" element={<Hiring />} /> {/* Add this line for the Hiring page */}
        <Route path="/share" element={<Share />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/postermaking" element={<PosterMaking />} />

      </Routes>
      <Footer /> 
    </div>
  );
}

export default App;
