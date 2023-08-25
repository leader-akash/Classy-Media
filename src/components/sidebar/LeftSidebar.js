import React, { useState } from 'react'
import logo from "../../assets/logo.png"
import "./LeftSidebar.css"
import { useNavigate } from 'react-router-dom';
const LeftSidebar = () => {

  const [boxOpen, setBoxOpen] = useState(false);

  const navigate = useNavigate();

  return (
    <div className='sidebar-container'>
      <div>
        <img className='logo-homepage' src={logo} alt="logo" />
      </div>
      <div className='item-container'>
        <p className='items' onClick={()=> navigate("/home")}> <i class="fa-solid fa-house side-icon"></i> Home</p>
        <p className='items' onClick={()=> navigate("/explore")}><i class="fa-solid fa-hashtag side-icon"></i> Explore</p>
        <p className='items' onClick={()=> navigate("/bookmarks")}> <i class="fa-regular fa-bookmark side-icon"></i> Bookmarks</p>
        <p className='items' onClick={()=> navigate("/profile")}> <i class="fa-regular fa-user side-icon"></i> Profile</p>
      </div>

      <div className='profile-settings' onClick={()=> setBoxOpen(boxOpen => !boxOpen)}>
        <img className='profile-img' src="https://pbs.twimg.com/profile_images/1514842645260292097/dPW4KAZA_400x400.jpg" alt="profile-img" />
        <div className='profile-info'>
          <p className='profile-name'>Akash</p>
          <small className='profile-id'>@Akashking1</small>
        </div>
        <div className='option-btn'>...</div>
      </div>
    {
      boxOpen ?
    
      <div className='logout-feature'>
        <div className='logout-profile-settings'>
          <img className='profile-img' src="https://pbs.twimg.com/profile_images/1514842645260292097/dPW4KAZA_400x400.jpg" alt="profile-img" />
          <div className='profile-info'>
            <p className='profile-name'>Akash</p>
            <small className='profile-id'>@Akashking1</small>
          </div>
          <div className='check-sign'>✔</div>
        </div>
        <p className='logout-btn'> Logout @Akashking1</p>
      </div>
      :
      ""
    }

    </div>
  )
}

export default LeftSidebar;