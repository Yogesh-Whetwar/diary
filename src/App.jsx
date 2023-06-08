import React from 'react';
import {useRoutes, Navigate} from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';
import Layout from './pages/Layout';
import DiaryPost from './pages/DiaryPost';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";  
import Signup from './pages/Signup'; 
import Login from './pages/Login';

const App = () => {     
  const { user } = useAuthContext();
  return (
    <Router>
  <div>
    <Routes>
      {/* <Route path="/" element={<Layout/>} /> */}
      <Route path="/" element={<Layout/>} />

      <Route path="/api/posts/:id"  element= {user ? <DiaryPost /> : <Navigate to="/api/login" />} />
      <Route path="/api/signup"  element= {!user ? <Signup /> : <Navigate to="/" /> } />
      <Route path="/api/login"  element= { !user ? <Login /> : <Navigate to="/" /> } />
      {/* <Route path="/login" element={[<Login />]} /> */}
     
    </Routes>
  </div>
</Router>
    )
  //  const elements= useRoutes([
  //   {  path:'/',
  //   element: <Layout/>,
  //   children:[
  //     {
  //       path:'/', element:<Home/>
  //     },
  //     {
  //       path:'/api/posts/:id', element:<DiaryPost/>
  //     }
  //   ]
  // }  

  //   ]);
  //   return elements;
}

export default App;