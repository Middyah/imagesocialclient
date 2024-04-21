import React, { useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import axios from 'axios';
import Dropdown from 'react-bootstrap/Dropdown';
import apiUrl from '../ApiAxios';
import { useNavigate } from 'react-router-dom';
import './css/ImageUpload.css';  // Import the CSS file
import icon from '../component/image/upload.png'

const ImageUpload = ({ onUpload, title, uploadreff, setuploadreff, selectedCategory, setShowModal, selectedLocation, Contact, Link, Productname }) => {
  const navigate = useNavigate();
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [base64Images, setBase64Images] = useState([]);
  const [base64Image, setBase64Image] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [uploading, setUploading] = useState(false); // State to manage button disabled state

  // const handleFileChange = async (e) => {
  //   setSelectedFile(e.target.files[0]);
  //   const base64 = await convertToBase64(e.target.files[0]);
  //   setBase64Image(base64);
  // };
  const handleFileChange = async (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 10) {
      setErrorMessage('You can upload a maximum of 10 images.');
      setSelectedFiles([]); // Clear the selected files array
    setBase64Images([]); // Clear the base64 images array
    return;
    } else {
      setErrorMessage(''); // Clear the error message
    }
    const base64Array = await Promise.all(files.map(file => convertToBase64(file)));
    setSelectedFiles(files);
    setBase64Images(base64Array);
    console.log("Base64 Images Array:", base64Array);
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
  const currentDate = new Date();
    const uniqueNumber = currentDate.getTime() + currentDate.getDay() + currentDate.getMinutes();
const[combineimg,setCombineimg]=useState(uniqueNumber)
  const uploadImage = async () => {
    if (!selectedFiles.length || !selectedCategory || !selectedLocation || !Productname) {
      setErrorMessage('Please fill all mandatory fields.');
      return;
    }
    setUploading(true); // Disable the button when uploading starts

    // const formData = new FormData();
    // formData.append('image', selectedFile);
    // formData.append('post_title', title);
    // formData.append('category', selectedCategory);
    // formData.append('location', selectedLocation);
    // formData.append('Link', Link);
    // formData.append('Contactnumber', Contact);
    // formData.append('Productname', Productname);
    const formDataArray = selectedFiles.map((file, index) => {
      const formData = new FormData();
      formData.append('image', file);
      formData.append('post_title', title);
      formData.append('category', selectedCategory);
      formData.append('location', selectedLocation);
      formData.append('Link', Link);
      formData.append('Contactnumber', Contact);
      formData.append('Productname', Productname);
      formData.append('combineimg', combineimg);
      return formData;
    });

  //   try {
  //     await apiUrl.post('/api/userpost/newupload', formData, {
  //       headers: {
  //         'Content-Type': 'multipart/form-data',
  //       },
  //     });
  //     setErrorMessage('');
  //     onUpload(base64Image);
  //   } catch (error) {
  //     console.error('Error uploading image:', error);
  //   } finally {
  //     setUploading(false); 
  //     setuploadreff('');
  //     setShowModal(false);

      
  //   }
  // };

  try {
    const uploadRequests = formDataArray.map(formData =>
      apiUrl.post('/api/userpost/newupload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
    );
    await Promise.all(uploadRequests);
    setErrorMessage('');
    onUpload(base64Images);
  } catch (error) {
    console.error('Error uploading images:', error);
  } finally {
    setUploading(false); // Enable the button after API response
    setuploadreff('');
    setShowModal(false);
    setCombineimg("")
  }
};

  useEffect(() => {
    if (uploadreff) {
      uploadImage();
    }
  }, [uploadreff]);

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <p>Let's upload an image</p>
        {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
        <div className="file-wrapper">
        <label htmlFor="file-input" className="file-label">
          
    {base64Images.length > 0 ? (
            base64Images.map((base64, index) => (
              <img
                key={index}
                src={base64}
                alt={`Uploaded image ${index}`}
                className='modelimage'
              />
            ))
          ) : (
            <img src={icon} alt="Upload Icon" className='modelimage preview-image' />
          )}
          <input id="file-input" accept="image/*" type="file" onChange={handleFileChange} style={{ display: 'none' }} multiple />
        </label>
        </div>
        {loading && (
          <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const Upload = () => {
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState('');
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  const [selectedCategory, setselectedCategory] = useState('');
  const [selectedLocation, setselectedLocation] = useState('');
  const [Contact, setContact] = useState('');
  const [Link, setLink] = useState('');
  const [Productname, setProductname] = useState('');
  const [uploadreff, setuploadreff] = useState('');
  const [uploading, setUploading] = useState(false); // State to manage button disabled state

  const handleCategoryChange = (event) => {
    setselectedCategory(event.target.value);
  };

  const handleLocation = (event) => {
    setselectedLocation(event.target.value);
  };

  const countries = [
    'Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bhutan', 'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cabo Verde', 'Cambodia', 'Cameroon', 'Canada', 'Central African Republic', 'Chad', 'Chile', 'China', 'Colombia', 'Comoros', 'Congo', 'Costa Rica', 'Croatia', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'East Timor (Timor-Leste)', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Eswatini', 'Ethiopia', 'Fiji', 'Finland', 'France', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Greece', 'Grenada', 'Guatemala', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'Korea, North', 'Korea, South', 'Kosovo', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Mauritania', 'Mauritius', 'Mexico', 'Micronesia', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Morocco', 'Mozambique', 'Myanmar (Burma)', 'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'North Macedonia', 'Norway', 'Oman', 'Pakistan', 'Palau', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Qatar', 'Romania', 'Russia', 'Rwanda', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Vincent and the Grenadines', 'Samoa', 'San Marino', 'Sao Tome and Principe', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'South Sudan', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Togo', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Vatican City', 'Venezuela', 'Vietnam', 'Yemen', 'Zambia', 'Zimbabwe'];

  const options = [
    { value: 'Select the Category', label: 'Select the Category*' },
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

  const handleUpload = () => {
   
    setUploading(true);
    setuploadreff(new Date().getMilliseconds());
  };
  const handleNameChange = (e) => {
    const value = e.target.value;
    // Limit input to 40 characters
    if (value.length <= 40) {
      setTitle(value);
    }
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
            padding: '7px',
            borderRadius: '80px',
            background: '#fff',
          }}
          onClick={handleShow}
        >
          ➕
        </Button>
        <div className='kkkk'>
          {/* <Modal show={showModal} onHide={handleClose} centered >
            <Modal.Header className="custom-modal-header" closeButton>
            </Modal.Header>
            <Modal.Body className='modelbody' >
              <>
                <input
                  type="text"
                  placeholder="Name"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  style={{ marginLeft: '11px' }}
                  className='inputtext'
                />
                <select
                  name="location"
                  id="location"
                  value={selectedLocation}
                  onChange={handleLocation}
                  className='input'
                  style={{ marginLeft: '11px' }}
                >
                  <option value="" disabled selected>Select a location</option>
                  {countries.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>

                <select
                  name="category"
                  id="category"
                  value={selectedCategory}
                  onChange={handleCategoryChange}
                  className='input'
                  style={{ marginLeft: '11px' }}
                >
                  {options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
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
                onUpload={() => setUploading(false)}
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
                  placeholder="Product Name*"
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
                <Button onClick={handleUpload} disabled={uploading}> 
                  Upload
                </Button>
              </div>
            </Modal.Body>
          </Modal> */}

<Modal show={showModal} onHide={handleClose} centered className="custom-modal">
  <Modal.Header className="custom-modal-header" closeButton>
  </Modal.Header>
  <Modal.Body className='modelbody' >
    <>
    <ImageUpload
      onUpload={() => setUploading(false)}
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
      <input
        type="text"
        placeholder="Name"
        value={title}
        // onChange={(e) => setTitle(e.target.value)}
        onChange={handleNameChange}
        style={{ marginLeft: '11px' }}
        className='inputtext'
      />
      {/* <select
        name="location"
        id="location"
        value={selectedLocation}
        onChange={handleLocation}
        className='input'
        style={{ marginLeft: '11px' }}
      >
        <option value="" disabled selected>Select a location</option>
        {countries.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select> */}

      <select
        name="category"
        id="category"
        value={selectedCategory}
        onChange={handleCategoryChange}
        className='input'
        style={{ marginLeft: '11px' }}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
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
    
    <div className='twoinput'>
      <input
        type="text"
        placeholder="Product Name*"
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
    {uploading && ( // Show the spinner when uploading
    <div className="spinner-border" role="status">
      <span className="sr-only"></span>
    </div>
  )}
  <br></br>
      <Button onClick={handleUpload} disabled={uploading}> {/* Disable the button based on uploading state */}
        Upload
      </Button>
    </div>
  </Modal.Body>
</Modal>

        </div>
      </center>
    </div>
  );
};

export default Upload;
