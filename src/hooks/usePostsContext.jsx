import { useContext } from "react"; 
import { PostContext } from "../context/PostContext";
import React from 'react'

export const usePostsContext = () => {
   const context= useContext(PostContext);
    console.log("called contedxt: ")
   if(!context) throw Error('usePostsContext must be used inside a PostContext Provider');
   return context;
}

