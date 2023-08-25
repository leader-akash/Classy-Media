import React from 'react'
import logo from "../../assets/logo.png"
import "./Sidebar.css"
const Sidebar = () => {
  return (
    <div className='sidebar-container'>
        <div>
            <img className='logo-homepage' src={logo} alt="logo" />
        </div>
        <div className='item-container'>
            <p className='items'>Home</p>
            <p className='items'>Explore</p>
            <p className='items'>Bookmarks</p>
            <p className='items'>Profile</p>
        </div>
    </div>
  )
}

export default Sidebar