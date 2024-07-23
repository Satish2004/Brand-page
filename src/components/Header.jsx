import React from 'react'
import "../App.css"

const Header = () => {
  return (
   <>
   <div className="Navbar   w-full h-2 p-4">
    <div className="logo">
        <img src="\images\nike brand logo.png" width={70} alt="nike_brand_logo" />
    </div>
    <div className="nav-link">
        <ul>
            <li>MENU</li>
            <li>LOCATION</li>
            <li>ABOUT</li>
            <li>CONTACT</li>
        </ul>
    </div>
    <button className=' focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900'>Login</button>
   </div>
   </>
  )
}

export default Header