import React, { useState } from 'react'
import logo from "../../assets/logo.png"
import "./LeftSidebar.css"
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../contexts/user-context';
import { logoutHandler } from '../../redux/slice/authSlice';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';

const LeftSidebar = () => {

  const [boxOpen, setBoxOpen] = useState(false);
  const {setGetToken} = useUser();

  const dispatch = useDispatch();

  // const user = localStorage.getItem("userinfo");

  // const userInfo = JSON.parse(user);

  const {user} = useSelector((state)=> state.auth)

  const navigate = useNavigate();


  const handleLogout = () => {
    dispatch(logoutHandler());
    toast.success("Logged out successfully")
    navigate("/")
  }


  return (
    <div className='sidebar-container'>
      <div>
        <img className='logo-homepage' src={logo} alt="logo" />
      </div>
      <div className='item-container'>
        <p className='items' onClick={()=> navigate("/home")}> <i className="fa-solid fa-house side-icon"></i> Home</p>
        <p className='items' onClick={()=> navigate("/explore")}><i className="fa-solid fa-hashtag side-icon"></i> Explore</p>
        <p className='items' onClick={()=> navigate("/bookmarks")}> <i className="fa-regular fa-bookmark side-icon"></i> Bookmarks</p>
        <p className='items' onClick={()=> navigate("/profile")}> <i className="fa-regular fa-user side-icon"></i> Profile</p>
      </div>

      <div className='profile-settings' onClick={()=> setBoxOpen(boxOpen => !boxOpen)}>
        <img className='profile-img' src="https://pbs.twimg.com/profile_images/1514842645260292097/dPW4KAZA_400x400.jpg" alt="profile-img" />
        <div className='profile-info'>
          <p className='profile-name'>{user?.firstName}</p>
          <small className='profile-id'>@{user?.username}</small>
        </div>
        <div className='option-btn'>...</div>
      </div>
    {
      boxOpen ?
    
      <div className='logout-feature'>
        <div className='logout-profile-settings'>
          <img className='profile-img' src="https://pbs.twimg.com/profile_images/1514842645260292097/dPW4KAZA_400x400.jpg" alt="profile-img" />
          <div className='profile-info'>
            <p className='profile-name '>{user?.firstName} <span className='check-sign'>✔</span></p>
            <small className='profile-id'>@{user?.username}</small>
          </div>
          {/* <div className='check-sign'>✔</div> */}
        </div>
        <p className='logout-btn' onClick={()=>{handleLogout()}} > Logout @{user?.username}</p>
      </div>
      :
      ""
    }

    </div>
  )
}

export default LeftSidebar;