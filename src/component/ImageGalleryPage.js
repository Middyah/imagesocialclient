// ImageGalleryPage.js
import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import apiUrl from '../ApiAxios';
import InfiniteScroll from 'react-infinite-scroll-component';
import Imagebutton from './Imagebutton';
import NavbarPost from './NavbarPost';
import CustomNavbar from './CustomNavbar';
import './css/ImageGalleryPage.css'; // Import the CSS file



const ImageGalleryPage = () => {
  // ... (rest of the code remains unchanged)
  const searchParams = new URLSearchParams(document.location.search)
  let category = searchParams.get('category')
  let productname = searchParams.get('Productname');
  let post_title = searchParams.get('post_title')
  console.log(post_title, category, "jfghfghg");
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState([])
  const handlePagination = () => {
    if (images && images.length > 0) {
      setPage((prevPage) => prevPage + 1);
    }
  };
  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);

  };
  let reff = localStorage.getItem("reff")
  let location = localStorage.getItem("location")
  const fetchImages = async () => {
    try {
      let res = await apiUrl.get(`/api/userpost/getallpost?page=${page}&limit=7&category=${category === null ? "" : category}&&Productname=${productname === null ? "": productname}&location=${location !== null ? location : ""}`)
      setImages((prevData) => [...images, ...res.data.posts])
      setIsLoading(res.data.posts)
    } catch (err) {
      console.log(err);
    }
  };


  useEffect(() => {
    fetchImages();
  }, [page, reff]);

  const [imageLoaded, setImageLoaded] = useState(false);
  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleOpen = (link) => {
    console.log(link, "link");
    window.location.assign(link)
  }
  console.log(images, page, "hhh", imageLoaded);

  
  return (
    <div className="image-gallery-container">
      
      <NavbarPost />
      
      <div className="gallery-container">
      {isLoading && images.length === 0 && (
          <div className="loading-boxes">
            {/* Render fake loading boxes */}
            {[1, 2].map((index) => (
              <Card key={index} className={`card-custom ${window.innerWidth <= 768 ? 'mobile-card' : ''}`}>
                {/* ... (rest of your card code) */}
                <Card.Body style={{ padding: 0 }}>
                  <div className="placeholder-box"></div>
                </Card.Body>
              </Card>
            ))}
          </div>
        )}

        <InfiniteScroll
          dataLength={images.length}
          next={loadMore}
          hasMore={true}
          loader={
            <>
              {isLoading?.length !== 0 && (
                <div className="spinner-grow text-danger" role="status">
                  <span className="sr-only"></span>
                </div>
              )}
            </>
          }
        >
          {/* {images.length === 0 && <div>No Data Found</div>} */}
          {images.map((item) => (
            <Card
              key={item._id}
              className={`card-custom ${window.innerWidth <= 768 ? 'mobile-card' : ''}`}
            >
              {/* ... (rest of your card code) */}
              <Card.Text>
                <div className="headtop">
                  <h5 className="card-title">{item.post_title}</h5>
                  {item.Link && (
                    <a className="link" href={item.Link} target="_blank" rel="noopener noreferrer">
                      Click here
                    </a>
                  )}
                </div>
              </Card.Text>
              {!imageLoaded && (
                <Card.Img variant="top" src="holder.js/100px180" className="placeholder-image" />
              )}
              <Card.Img
                variant="top"
                src={`${process.env.REACT_APP_API_URL}/api/userpost/images/${item._id}`}
                className="main-image"
                onLoad={handleImageLoad}
              />
              <Card.Body style={{ padding: 0 }}>
                <Imagebutton id={item._id} Contact={item.Contactnumber} />
              </Card.Body>
            </Card>
          ))}
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default ImageGalleryPage;