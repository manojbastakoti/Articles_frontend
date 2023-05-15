// import React from 'react'

import { useEffect } from "react";
import { useState } from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
  const [theme,setTheme] = useState(localStorage.getItem("mernTheme")??"light");
  useEffect(() => {
  if(theme==="dark"){
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }

  localStorage.setItem("mernTheme",theme);

  }, [theme]);
  
    const themeHandler=()=>{
       setTheme(theme==="dark"?"light":"dark");
    }
  
  return (
    <div className='Nav bg-white shadow-md px-4 py-3 grid grid-cols-2 rounded-md  dark:bg-[#0F172A] dark:border-b-2 dark:border-[#d1d2d4] dark:rounded-none'>
      <div className="logo font-montse text-2xl dark:text-white">
        <Link to="/">Writtenly</Link>
      </div>
      <div className="links flex justify-end gap-5 items-center">
        <Link to="/register"className="hover:font-bold transition-all dark:text-white">Register</Link>
        <Link to="/login" className="hover:font-bold transition-all dark:text-white">Login</Link>
        <div className="icons dark:text-white">
          {theme==="light"?   <div className="icon cursor-pointer" onClick={themeHandler}>
            <i className="fa-solid fa-moon"></i>
            </div>:   <div className="icon cursor-pointer" onClick={themeHandler}>
            <i className="fa-solid fa-sun"></i>
            </div>}
         
         

        </div>

      </div>
    </div>
  )
}

export default Navbar
