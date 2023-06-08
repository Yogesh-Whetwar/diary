import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from '../styles/styles.module.scss';
import React from 'react'
import { useAuthContext } from "../hooks/useAuthContext"; 
import format from "date-fns/format";
const DiaryPost = () => {    

    console.log("inside dairy");
    const {id}=useParams(); 
    console.log(id);
    const [post ,setPost]=useState(null);    
    const {user}=useAuthContext();

    useEffect (()=>{
        const fetchPost=async()=>{
            const response=await fetch(`https://diary-ub4b.onrender.com/api/posts/${id}`,{
                headers:{
                    'Authorization':`Bearer ${user.token}`
                }
            });
            const json=await response.json();
            if(response.ok){
                setPost(json);
            }
        } 
        fetchPost();
    },[id, setPost] );
    if(!post){
        return null;
    }
  return (
    <> 
   <div className={styles.diaryPost}>
   <h2>{post.title}</h2>
   <div> { format(new Date(post.date),'MMM d, y')}</div>
   <p>{post.content}</p>
   </div>
    </>
  )
}

export default DiaryPost