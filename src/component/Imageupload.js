import React, { useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import axios from 'axios';
import Dropdown from 'react-bootstrap/Dropdown';
import apiUrl from '../ApiAxios';
import { useNavigate } from 'react-router-dom';

const ImageUpload = ({ onUpload, title, uploadreff, setuploadreff, selectedCategory, setShowModal, selectedLocation,
  Contact,Link, Productname }) => {
  const navigate = useNavigate();
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

  const handleFileChange = async (e) => {
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
      formData.append('location', selectedLocation);
      formData.append('Link', Link);
      formData.append('Contactnumber', Contact);
      formData.append('Productname', Productname);
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
      } finally {
        // window.location.reload();
        localStorage.setItem("reff", new Date().getMilliseconds())
        setuploadreff('');
        // navigate('/mainarea');
        setShowModal(false)
      }
    }
  };

  useEffect(() => {
    if (uploadreff) {
      uploadImage();
    }
  }, [uploadreff]);

  return (
    <div className="auth-wrapper">
      <div className="auth-inner" style={{ width: 'auto' }}>
        <p>Let's upload an image</p>
        <input accept="image/*" type="file" onChange={handleFileChange} />

        {base64Image && <img src={base64Image} alt="Uploaded" className='modelimage' />}
      </div>
    </div>
  );
};

const Upload = () => {
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState('');
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleUploadComplete = (base64Image) => {
    // Handle the base64Image data as needed (e.g., send it to another component or perform actions)
    console.log('Uploaded image in base64:', base64Image);
  };

  const options = [
    'All',
    "What's new",
    'Product',
    'Service',
    'Health',
    'Education',
    'Job',
    'Lifestyle',
    'Entertainment',
    'Technology',
    'Finance',
    'Sports',
    'Real Estate',
    'Others',
    'Website Activity',
  ];
  const countries = [
    'Select a country',
    'United States',
    'United Kingdom',
    'Canada',
    'Australia',
    'Pakistan',

  ];
  const [selectedCategory, setselectedCategory] = useState('');
  const [selectedLocation, setselectedLocation] = useState('');
  const [Contact, setContact] = useState('');
  const [Link, setLink] = useState('');
  const [Productname, setProductname] = useState('');

  const handleCategoryChange = (event) => {
    setselectedCategory(event.target.value);
  };
  const handleLocation = (event) => {
    setselectedLocation(event.target.value);
  };
  console.log(selectedLocation, "selectedLocation");
  const [uploadreff, setuploadreff] = useState('');

  const uploadImage = () => {
    setuploadreff(new Date().getMilliseconds());
  };

  return (
    <div>
      <center>
        <Button
          variant="primary"
          style={{
            fontSize: '28px',
            border: '1px solid #000',
            marginLeft: '-3px',
            marginTop: '5px',
            padding: '7px', // Add padding
            borderRadius: '80px', // Add border-radius for rounded corners
            background: '#fff', // Set the background color to white
          }}
          onClick={handleShow}
        >
          ➕
        </Button>
        <div className='kkkk'>
          <Modal show={showModal} onHide={handleClose} centered >
            {/* <Modal.Header closeButton>
            <Modal.Title>Upload Image</Modal.Title>
          </Modal.Header> */}
            <Modal.Body className='modelbody'>
              <>
                <input
                  type="text"
                  placeholder="Name"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  style={{ marginLeft: '11px' }}
                  className='inputtext'
                />
                <select name="location" id="location" value={selectedLocation} onChange={handleLocation} className='input' style={{ marginLeft: '11px' }}>
                  {countries.map((option, index) => (
                    <option key={index} value={index}>
                      {option}
                    </option>
                  ))}
                </select>
                <select name="category" id="category" value={selectedCategory} onChange={handleCategoryChange} className='input' style={{ marginLeft: '11px' }}>
                  {options.map((option, index) => (
                    <option key={index} value={index}>
                      {option}
                    </option>
                  ))}
                </select>
                <>

                  <input
                    type="text"
                    placeholder="Contact"
                    value={Contact}
                    onChange={(e) => setContact(e.target.value)}
                    style={{ marginLeft: '11px' }}
                    className='inputtext'
                  />

                </>
              </>
              <ImageUpload
                onUpload={handleUploadComplete}
                title={title}
                selectedCategory={selectedCategory}
                uploadreff={uploadreff}
                setuploadreff={setuploadreff}
                setShowModal={setShowModal}
                selectedLocation={selectedLocation}
                Contact={Contact}
                Link={Link}
                Productname={Productname}
              />
              <div className='twoinput'>
                <input
                  type="text"
                  placeholder="Product Name"
                  value={Productname}
                  onChange={(e) => setProductname(e.target.value)}
                  style={{ marginLeft: '11px', marginBottom: "10px", marginTop: "5px" }}
                  className='inputtext'
                />
                <input
                  type="text"
                  placeholder="Product Link"
                  value={Link}
                  onChange={(e) => setLink(e.target.value)}
                  style={{ marginLeft: '11px' }}
                  className='inputtext'
                />
              </div>
              <div style={{ justifyContent: "center", alignItems: "center", textAlign: "center", paddingTop: "79px" }}>
                <Button onClick={uploadImage} >
                  Upload
                </Button>
              </div>
            </Modal.Body>
            {/* <Modal.Footer style={{justifyContent:"center",alignItems:"center",textAlign:"center",backgroundColor:"#0000008c"}}>
            
          </Modal.Footer> */}
          </Modal>
        </div>
      </center>
    </div>
  );
};

export default Upload;
