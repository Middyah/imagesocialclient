return (
    <div style={{ textAlign: 'center' }}>
      {/* <NavbarPost/> */}
      <CustomNavbar />

      <div style={{ textAlign: 'center', display: 'inline-block' }}>
        <InfiniteScroll
          dataLength={images.length}
          next={loadMore}
          hasMore={true}
          loader={
            <>
              {isLoading?.length !== 0 && (
                <div class="spinner-grow text-danger" role="status">
                  <span class="sr-only"></span>
                </div>
              )}
            </>
          }
        >
          {images.length === 0 && <div>No Data Found</div>}
          {images.map((item) => (
            <Card style={{ width: '27.15vw', marginBottom: '12px', marginBottom: '41px', padding: '1vw' }}>
              {/* ... (rest of the card code remains unchanged) */}
              <Card.Text>
                <div className='headtop' style={{ display: "flex" }}>
                  <h5 class="card-title" style={{ width: "50%", textAlign: 'left' }}>{item.post_title}</h5>
                  {item.Link && (
                    <a
                      style={{ width: "75%", marginLeft: "71px" }}
                      href={item.Link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Click here
                    </a>
                    // <a style={{width:"75%",marginLeft:"71px"}} href="www.google.com" target='_blank'>Open</a>

                  )}
                </div>
              </Card.Text>
              {!imageLoaded && (

                <Card.Img variant="top" src="holder.js/100px180" style={{ height: "25vw", width: '40vw', backgroundColor: "gray" }} />

              )}
              <Card.Img
                variant="top"
                src={`${process.env.REACT_APP_API_URL}/api/userpost/images/${item._id}`}
                style={{ backgroundColor: imageLoaded ? "gray" : "red", height: '25vw', border: '2px solid red', objectFit: 'contain' }}
                onLoad={handleImageLoad}
              />


              <Card.Body style={{ padding: 0 }}>
                {/* ... (rest of the Card.Body code remains unchanged) */}
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
