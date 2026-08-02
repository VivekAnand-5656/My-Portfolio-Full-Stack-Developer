import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseCircle } from "react-icons/io5";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const linkClass = 'font-semibold cursor-pointer hover:text-[#dcdf08] border-b border-b-[#344C36] hover:border-b-[#dcdf08] transition-all duration-500 ease-in-out'

  return (
    <nav className='w-full sm:w-[85vw] lg:w-[60vw] mx-auto h-[9vh] sm:h-[10vh] bg-[#344C36] text-[#ffffff] flex justify-between items-center px-4 sm:p-2 sm:rounded-full relative z-50' >
      <h1 className='text-xl sm:text-[1.5rem] font-bold' >Vivek.</h1>

      <div className='sm:hidden flex justify-center items-center gap-2' >
        <button onClick={() => setMenuOpen(!menuOpen)} className='text-2xl'>
          {menuOpen ? <IoCloseCircle /> : <GiHamburgerMenu />}
        </button>
      </div>

      <div className='hidden sm:flex gap-4' >
        <NavLink to="/" className={linkClass} >Home</NavLink>
        <HashLink smooth to="/#about" className={linkClass} >About</HashLink>
        <HashLink smooth to="/#skills" className={linkClass} >Skills</HashLink>
        <HashLink smooth to="/#projects" className={linkClass} >Projects</HashLink>
        <HashLink smooth to="/#services" className={linkClass} >Services</HashLink>
      </div>

      <div
        className={`sm:hidden absolute top-[calc(100%+10px)] right-0 w-56 bg-[#344C36] rounded-2xl flex flex-col gap-4 p-5 shadow-lg transform transition-all duration-500 ease-in-out origin-top ${
          menuOpen ? 'translate-y-0 opacity-100 scale-100 pointer-events-auto' : '-translate-y-4 opacity-0 scale-95 pointer-events-none'
        }`}
      >
        <NavLink to="/" onClick={() => setMenuOpen(false)} className={linkClass} >Home</NavLink>
        <HashLink smooth to="/#about" onClick={() => setMenuOpen(false)} className={linkClass} >About</HashLink>
        <HashLink smooth to="/#skills" onClick={() => setMenuOpen(false)} className={linkClass} >Skills</HashLink>
        <HashLink smooth to="/#projects" onClick={() => setMenuOpen(false)} className={linkClass} >Projects</HashLink>
        <HashLink smooth to="/#services" onClick={() => setMenuOpen(false)} className={linkClass} >Services</HashLink>
      </div>
    </nav>
  )
}

export default Navbar