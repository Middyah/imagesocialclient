import React from 'react'
// import SearchBar from "./component/Searchbar";
// import LocationDropdown from './component/LocationDropdown';
import Navbar from './Navbar';
// import Upload from './component/Upload';
// import Imageupload from './component/Imageupload';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import App from '../App';
import Home from './Home';


export default function Allrouting() {
  return (
    <div>
        <h1>
            hello
        </h1>
        <BrowserRouter>
        <Routes>
            
                <Route path ='/' element={<Navbar/>}/>
                <Route path ='/home' element={<Home/>}/>
                <Route path ='/MainArea' element={<MainArea/>}/>

        
        </Routes>
        </BrowserRouter>
      
    </div>
  )
}
