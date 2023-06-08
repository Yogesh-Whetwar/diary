import React, { useEffect} from 'react'
import styles from '../styles/styles.module.scss'
import PostHead from '../components/PostHead';
import PostForm from '../components/PostForm';
import { usePostsContext } from '../hooks/usePostsContext';  
import { useAuthContext } from '../hooks/useAuthContext';
const Home = () => {    
  //now agr  hum chahte h ki state me koi bhi chnage ho to vo turant dikhayi de so we are going to use useContext of react for this purpose
  const {posts,dispatch}=usePostsContext();
  const {user}=useAuthContext();
    // const [posts,setPosts]=useState(null);
// console.log("hello");
    useEffect(()=>{
        const fetchPosts= async()=>{
            const response= await fetch('http://localhost:7000/api/posts',{
              headers: {
                 'Authorization':`Bearer ${user.token}`
              }
            }
            )
             
            const json=await response.json();
            // if(response.ok){
            //   setPosts(json); 
            //   // console.log(posts);
            // }
            if(response.ok){
              dispatch({
                type: 'SET_POSTS', payload: json
              })
            }
        } 
       if(user) fetchPosts();
    },[user, dispatch]);
  return (
    <> 
    <div>
        <h1>  Posts   </h1>  

        <ul className={styles.postList} >
 { posts && posts.map(post =>{ 
    // console.log("INside map function");
       return <PostHead key={post._id} post={post}/>
 })}
        </ul>

    </div> 
    <div>
<PostForm/>
    </div>
    </>
  )
}

export default Home;