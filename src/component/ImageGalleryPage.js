import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import apiUrl from '../ApiAxios';
import InfiniteScroll from "react-infinite-scroll-component";

const ImageGalleryPage = () => {
  const searchParams = new URLSearchParams(document.location.search);
  let category = searchParams.get('category');
  let postTitle = searchParams.get('post_title');
  console.log(postTitle, category, "jfghfghg");

  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handlePagination = () => {
    if (images && images.length > 0) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const loadMore = () => {
    // setPage((prevPage) => prevPage + 1); // No need to explicitly update page here
    handlePagination(); // Call the handlePagination function
  };

  const fetchImages = async () => {
    try {
      let res = await apiUrl.get(`/api/userpost/getallpost?page=${page}&limit=7&category=${category === null ? "" : category}&post_title=${postTitle === null ? "" : postTitle}`);
      setImages((prevData) => [...prevData, ...res.data.posts]);
      setIsLoading(res.data.posts.length > 0);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchImages();
  }, [page, category, postTitle]); // Include category and postTitle in the dependency array

  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  console.log(images, page, "hhh", imageLoaded);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Post Page </h1>

      <div style={{ textAlign: "center", display: "inline-block" }}>
        <InfiniteScroll
          dataLength={images.length}
          next={loadMore}
          hasMore={true}
          loader={
            <>
              {isLoading && (
                <div className="spinner-grow text-danger" role="status">
                  <span className="sr-only"></span>
                </div>
              )}
            </>
          }
        >
          {images.length === 0 && <div>No Data Found</div>}
          {images.map((item) => (
            <Card key={item._id} style={{ width: '18rem', marginBottom: "12px" }}>
              {!imageLoaded && (
                <Card.Img variant="top" src="placeholder-url" style={{ height: "199px", backgroundColor: "gray" }} />
              )}
              <Card.Img
                variant="top"
                src={`${process.env.REACT_APP_API_URL}/api/userpost/images/${item._id}`}
                style={{ backgroundColor: imageLoaded ? "gray" : "red" }}
                onLoad={handleImageLoad}
              />
              <Card.Body>
                <h5 className="card-title">{item.post_title}</h5>
              </Card.Body>
            </Card>
          ))}
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default ImageGalleryPage;
