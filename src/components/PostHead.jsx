import React from 'react'
import styles from '../styles/styles.module.scss';
import { Link } from 'react-router-dom';
import { usePostsContext } from '../hooks/usePostsContext';   
import { useAuthContext } from '../hooks/useAuthContext'; 
import { format } from 'date-fns';
const PostHead = ({post}) => {    
  const{dispatch}=usePostsContext();
  // console.log("Inside Posthead" );
  // console.log(` Posthead title of post is : ${post.title}`);  
  const {user}=useAuthContext();
const handleClick= async()=>{
   const response= await fetch(`https://diary2-cqpv.onrender.com/api/posts/${post._id}`,{
    method:'DELETE',
    headers:{
      'Authorization':`Bearer ${user.token}`
    }
   });
   const body = await response.text();
   const json=JSON.parse(body);
   if(response.ok){  
    dispatch({ type:'DELETE_POST', payload: json});
    console.log("post deleted",json);
   }
}

// console.log(`${post._id}`);
  return (
  <li>
    <span  className={styles.postHeadHeader} >
   <h2>  
    <Link to={`/api/posts/${post._id}`}> 
      {post.title}
       </Link>
   </h2>  
   <span class="material-symbols-outlined" 
   onClick={handleClick} >
delete
</span>
    </span> 
    <div>
       { format(new Date(post.date),'MMM d, y')}
    </div> 
    <p>{post.content.substring(0,200)} .....</p>
  </li>
  )
}

export default PostHead 
