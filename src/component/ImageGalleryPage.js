import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import apiUrl from '../ApiAxios';
import InfiniteScroll from "react-infinite-scroll-component";
import Imagebutton from './Imagebutton';
const ImageGalleryPage = () => {
  const searchParams = new URLSearchParams(document.location.search)
let category=searchParams.get('category')
let post_title=searchParams.get('post_title')
console.log(post_title,category,"jfghfghg");
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
let reff= localStorage.getItem("reff")
let location=localStorage.getItem("location")
  const fetchImages = async () => {
    try {
      let res = await apiUrl.get(`/api/userpost/getallpost?page=${page}&limit=7&category=${category===null?"":category}&post_title=${post_title===null?"":post_title}&location=${location!==null?location:""}`)
      setImages((prevData) => [...images, ...res.data.posts])
      setIsLoading(res.data.posts)
    } catch (err) {
      console.log(err);
    }
  };


  useEffect(() => {
    fetchImages();
  }, [page,reff]);

  const [imageLoaded, setImageLoaded] = useState(false);
  const handleImageLoad = () => {
    setImageLoaded(true);
  };
  console.log(images, page, "hhh",imageLoaded);
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Post Page </h1>
      
    
      <div style={{ textAlign: "center", display: "inline-block" }}>
        <InfiniteScroll
          dataLength={images.length}
          next={loadMore}
          hasMore={true}
          loader={<>
            {isLoading?.length !== 0 && (
             <div class="spinner-grow text-danger" role="status">
                <span class="sr-only"></span>
              </div>
            )}

          </>}

        >
          {images.length===0&&<div>No Data Found</div>}
          {images.map((item) => (
            <Card style={{ width: '18rem', marginBottom: "12px" ,marginBottom:"41px"}}>
            
              {!imageLoaded &&(
               
                <Card.Img variant="top" src="holder.js/100px180"  style={{height:"199px",backgroundColor:"gray"}}/>
              
              )}
                <Card.Img variant="top" src={`${process.env.REACT_APP_API_URL}/api/userpost/images/${item._id}`} style={{ backgroundColor: imageLoaded ? "gray" : "red" }}
                onLoad={handleImageLoad}  className='userimg'/>
              
              <Card.Body>
                {/* <Card.Title>Card Title</Card.Title> */}
                <Card.Text>
                <h5 class="card-title">{item.post_title}</h5>
                  
                </Card.Text>
                <Imagebutton id={item._id} Contact={item.Contactnumber}/>
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
          ))}

        </InfiniteScroll>


      </div>
    </div>
  );
};

export default ImageGalleryPage;
