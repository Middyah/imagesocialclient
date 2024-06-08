import React, { useState, useEffect } from 'react';
import likeimg from "./image/like.png";
import dislike from "./image/unlike.png";
import call from "./image/call.png";
import share from "./image/share.png";
import apiUrl from '../ApiAxios';

export default function Imagebutton({ id, Contact,combineimg }) {
  let likeuserid = localStorage.getItem("likeuserid");
  const [reff, setReff] = useState("");
  const [data, setData] = useState({});
  const [userlike, setUserLike] = useState(false);
  const [totallike, setTotalLike] = useState(0);
  const [shareCount, setShareCount] = useState(0);

  console.log(userlike, totallike, data);

  const fetchLike = async () => {
    try {
      let res = await apiUrl.get(`/api/admin/post/likecount/${id}/?user_id=${likeuserid ? likeuserid : ""}`);
      setData(res.data);
      setUserLike(res.data.user_like);
      setTotalLike(res.data.like);
    } catch (err) {
      console.log(err);
    }
  };

  const json = JSON.stringify({
    user_id: likeuserid
  });

  useEffect(() => {
    if (!likeuserid) {
      localStorage.setItem("likeuserid", "User" + new Date().getSeconds() + new Date().getMilliseconds());
    }
  }, [likeuserid]);

  useEffect(() => {
    // Retrieve share count from localStorage on component mount
    const storedShareCount = localStorage.getItem(`shareCount_${id}`);
    if (storedShareCount) {
      setShareCount(parseInt(storedShareCount));
    }
  }, [id]);

  const postLike = async () => {
    setUserLike(true);
    setTotalLike(totallike + 1);
    try {
      let res = await apiUrl.post(`/api/admin/post/like/${id}`, json);
      if (res) {
        setReff(new Date().getMilliseconds());
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchLike();
  }, [id, reff]);

  const handleShare = async () => {
    try {
      await navigator.share({
        title: 'Shared Title',
        url: `https://middyah.com/mainarea?combineimg=${combineimg}&category=0`,
      });
      console.log('Shared successfully');
      const newShareCount = shareCount + 1;
      setShareCount(newShareCount);
      // Store updated share count in localStorage
      localStorage.setItem(`shareCount_${id}`, newShareCount);
      await apiUrl.post(`/api/admin/post/share/${id}`);
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  const Call = () => {
    window.open(`tel:${Contact}`);
  };

  // useEffect(() => {
  //   const fetchShareCount = async () => {
  //     try {
  //       const res = await apiUrl.get(`/api/admin/post/sharecount/${id}`);
  //       setShareCount(res.data.shareCount);
  //     } catch (error) {
  //       console.error('Error fetching share count:', error);
  //     }
  //   };

  //   fetchShareCount();
  // }, [id]);

  return (
    <>
      <div className='allicons'>
        {userlike ? (
          <span><img src={likeimg} style={{ width: "29px", margin: "24px" }} /> <span>{totallike}</span></span>
        ) : (
          <span onClick={postLike}><img src={dislike} style={{ width: "29px", margin: "24px" }} /> <span>
        {/* {totallike} */}
</span></span>
        )}

        {Contact && (
          <img src={call} style={{ width: "29px", margin: "24px" }} onClick={() => Call()} />
        )}

        <img src={share} style={{ width: "29px", margin: "24px" }} onClick={handleShare} />
        <span>Shares: 
 {/* {shareCount} */}
</span> {/* Display share count */}
      </div>
    </>
  );
}
