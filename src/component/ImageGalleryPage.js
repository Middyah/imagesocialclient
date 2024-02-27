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



const ImageGalleryPage = ({serch}) => {
  // ... (rest of the code remains unchanged)
  const searchParams = new URLSearchParams(document.location.search)
  let category = searchParams.get('category')
  let productname = searchParams.get('Productname');
  let post_title = searchParams.get('post_title')
  let id = searchParams.get('id')
  console.log(post_title, category, "jfghfghg");
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState([])
  const handlePagination = () => {
    if (images && images.length > 0) {
      setPage((prevPage) => prevPage + 1);
    }
  };
  const[imgdata,setImgdata]=useState([])
  const loadMore =async () => {
    setPage((prevPage) => prevPage + 1);
    

  };
 
  console.log(images,"this is images",imgdata);
  let reff = localStorage.getItem("reff")
  // let location = localStorage.getItem("location")
  const[location,setLocation]=useState(localStorage.getItem('location'))

const[imagecategory,setImagecategory]=useState(localStorage.getItem("categorydata"))
  setInterval(()=>{
    setLocation(localStorage.getItem('location'))
  },1000)
  setInterval(()=>{
    setImagecategory(localStorage.getItem("categorydata"))
  },1000)
  
  console.log(imagecategory,"imagecategory")

  const fetchImages = async () => {
    try {
      // alert(2)
      let res = await apiUrl.get(`/api/userpost/getallpost?page=${page}&limit=7&category=${imagecategory?imagecategory:(category === null ? "" : category)}&&Productname=${serch?serch:(productname === null ? "": productname)}&location=${location !== null ? location : ""}&_id=${id?id:""}`)
      setImgdata(res.data.posts)
      setImages((prevData) => [...images, ...res.data.posts])
      // setImages([...res.data.posts])
      setIsLoading(res.data.posts)
    } catch (err) {
      console.log(err);
    }
  };

  const fetchImages2 = async () => {
    try {
      // alert(1)
      let res = await apiUrl.get(`/api/userpost/getallpost?page=${page}&limit=7&category=${imagecategory?imagecategory:(category === null ? "" : category)}&&Productname=${serch?serch:(productname === null ? "": productname)}&location=${location !== null ? location : ""}&_id=${id?id:""}`)
      setImgdata(res.data.posts)
      // setImages((prevData) => [...images, ...res.data.posts])
      setImages([...res.data.posts])
      setIsLoading(res.data.posts)
    } catch (err) {
      console.log(err);
    }
  };

  console.log(imagecategory,location,"aman");

  // useEffect(()=>{
  //   setImages((prevData) => [...images, ...imgdata]) 
  // },[page,imgdata.length])
  useEffect(() => {
    fetchImages();
  }, [page, reff]);

  useEffect(() => {
    fetchImages2();
  }, [imagecategory,location,serch]);
useEffect(()=>{
  setImages([])
  setPage(1)
},[imagecategory,location,serch])
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
      
      {/* <NavbarPost /> */}
      {/* <CustomNavbar /> */}
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
                      Visit
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
