import React from 'react'
import Navbar from './Navbar' 
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const Layout = () => {
  return (
    <div className=' bg-[#11121F] ' >
        <header><Navbar/></header>
        <main><Outlet/></main>
        <footer><Footer/></footer>
    </div>
  )
}

export default Layout