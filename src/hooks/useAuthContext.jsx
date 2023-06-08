import { useContext } from "react"; 
import { AuthContext } from "../context/AuthContext";
import React from 'react'

export const useAuthContext = () => {
   const context= useContext(AuthContext);
    console.log("called contedxt: ")
   if(!context) throw Error('usePostsContext must be used inside a PostContext Provider');
   return context;
}