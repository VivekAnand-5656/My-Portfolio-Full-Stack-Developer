import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className=' w-[60vw] mx-auto h-[10vh] bg-transparent text-white flex justify-around items-center p-2 rounded-4xl ' >
      <h1 className=' text-[1.5rem] font-bold ' >Vivek.</h1>

      <div className=' flex gap-2  ' >
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/skills">Skills</NavLink>
        <NavLink to="/projects">Projects</NavLink>
      </div> 
    </nav>
  )
}

export default Navbar