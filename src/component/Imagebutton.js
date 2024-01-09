import React, { useState ,useEffect} from 'react'
import likeimg from "./image/like.png"
import dislike from "./image/unlike.png"
import call from "./image/call.png"
import share from "./image/share.png"
import apiUrl from '../ApiAxios'
export default function Imagebutton({id,Contact}) {
    let likeuserid=localStorage.getItem("likeuserid")
    const[reff,setReff]=useState("")
const [data,setData]=useState({})
    const fetchLike = async () => {
        try {
          let res = await apiUrl.get(  `/api/admin/post/likecount/${id}/?user_id=${likeuserid?likeuserid:""}`)
          setData(res.data)
        } catch (err) {
          console.log(err);
        }
      };
      const json=JSON.stringify({
        user_id:likeuserid
      })
      useEffect(()=>{
        if(!likeuserid){
            localStorage.setItem("likeuserid","User" + new Date().getSeconds()+new Date().getMilliseconds())
        }
      },[likeuserid])
    const postLike = async () => {
        try {
          let res = await apiUrl.post( `/api/admin/post/like/${id}`,json)
          if(res){
            setReff(new Date().getMilliseconds())
          }
        } catch (err) {
          console.log(err);
        }
      };
  useEffect(()=>{
    fetchLike()
  },[id,reff])

    const handleShare = async () => {
      try {
        await navigator.share({
          title: 'Shared Title',
          url: window.location.hostname,
        });
        console.log('Shared successfully');
      } catch (error) {
        console.error('Error sharing:', error);
      }
    };
    const Call=()=>{
        window.open(`tel:${Contact}`)
    }
  return (
    <>
    <div className='allicons'>
        {data.user_like ?(
<span><img src={likeimg} style={{width:"29px",margin:"24px"}}/>  <span>{data.like}</span></span>
        ):(
            <span onClick={postLike}><img src={dislike} style={{width:"29px",margin:"24px"}}/>  <span>{data.like}</span></span>  
        )}
      
      {Contact &&( 
        <img src={call} style={{width:"29px",margin:"24px"}} onClick={()=>Call()}/>
      )} 
      
      <img src={share} style={{width:"29px",margin:"24px"}} onClick={handleShare}/>
    </div>
    </>
  )
}
