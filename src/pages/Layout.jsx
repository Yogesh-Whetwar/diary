import React from 'react'
import Navbar from '../components/Navbar'
import Home from './Home'
const Layout = () => {
  return (
    <> 
   <Navbar/>
    <main>
        <Home/>
    </main>

    </>
  )
}

export default Layout;