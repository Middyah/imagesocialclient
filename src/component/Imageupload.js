import React, { useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import axios from 'axios';
import Dropdown from 'react-bootstrap/Dropdown';
import apiUrl from '../ApiAxios';
import { useNavigate } from 'react-router-dom';
const ImageUpload = ({ onUpload,title,uploadreff ,setuploadreff,selectedCategory}) => {
  const navigate=useNavigate()
  const [selectedFile, setSelectedFile] = useState(null);
  const [base64Image, setBase64Image] = useState('');


  const fileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
  
      reader.onload = () => {
        resolve(reader.result);
      };
  
      reader.onerror = reject;
  
      reader.readAsDataURL(file);
    });
  };


  const handleFileChange = async(e) => {
    setSelectedFile(e.target.files[0]);
    const base64 = await convertToBase64(e.target.files[0]);
        setBase64Image(base64);
  };

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = () => {
        resolve(reader.result);
      };

      reader.onerror = reject;

      reader.readAsDataURL(file);
    });
  };

  const uploadImage = async () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('image', selectedFile);
      formData.append('post_title', title);
      formData.append('category', selectedCategory);
      try {
        await apiUrl.post('/api/userpost/newupload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        
        
        // Optionally, you can notify the parent component that the upload is complete
        // onUpload(base64);
      } catch (error) {
        console.error('Error uploading image:', error);
      }finally{
        setuploadreff("")
        navigate("/mainarea")
      }
    }
  };
  useEffect(()=>{
    if(uploadreff){
      uploadImage()
    }
  },[uploadreff])

  return (
    <div className="auth-wrapper">
      <div className="auth-inner" style={{ width: 'auto' }}>
        <p>Let's upload an image</p>
        <input accept="image/*" type="file" onChange={handleFileChange} />
        
        {base64Image && <img src={base64Image} alt="Uploaded" style={{width:"200px"}}/>}
      </div>
    </div>
  );
};

const Upload = () => {
  const [showModal, setShowModal] = useState(false);
  const[title,setTitle]=useState("")
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleUploadComplete = (base64Image) => {
    // Handle the base64Image data as needed (e.g., send it to another component or perform actions)
    console.log('Uploaded image in base64:', base64Image);
  };

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

  const [selectedCategory, setselectedCategory] = useState('All');

  const handleCategoryChange = (event) => {
    setselectedCategory(event.target.value);
  };
  const [uploadreff,setuploadreff]=useState("")
  const uploadImage=()=>{
    setuploadreff(new Date().getMilliseconds())
  }
  return (
    <div>
      <center>
        <Button variant="primary" style={{ marginLeft: '-3px', marginTop: '5px' }} onClick={handleShow}>
          Open Modal
        </Button>
        <Modal show={showModal} onHide={handleClose} style={{ marginTop: '230px' }}>
          <Modal.Header closeButton>
            <Modal.Title>Upload Image</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          

            <>
     
            <select name="category" id="category" value={selectedCategory} onChange={handleCategoryChange}>
      {options.map((option, index) => (
        <option key={index} value={option}>{option}</option>
      ))}
    </select>
  
    <>
    <input type='text' placeholder='image title'  value={title} onChange={(e)=>setTitle(e.target.value)} style={{marginLeft:"11px"}}/>
    </>
            </>
            
            <ImageUpload onUpload={handleUploadComplete} title={title} selectedCategory={selectedCategory} uploadreff={uploadreff} setuploadreff={setuploadreff}/>
          </Modal.Body>
          <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          <Button onClick={uploadImage} style={{marginLeft:"311px"}}>Upload</Button>
          
          </Modal.Footer>
        </Modal>
      </center>
    </div>
  );
};

export default Upload;
