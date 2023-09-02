import React, { useState } from 'react'
import logo from "../../assets/logo.png"
import "./LeftSidebar.css"
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { logoutHandler } from '../../redux/slice/authSlice';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import avatar from '../../assets/avatar.png'

const LeftSidebar = () => {

  const {username} = useParams();
  const location = useLocation();

  const [boxOpen, setBoxOpen] = useState(false);

  const dispatch = useDispatch();

  // const user = localStorage.getItem("userinfo");

  // const userInfo = JSON.parse(user);

  const {user} = useSelector((state)=> state.auth);

  const navigate = useNavigate();

 

  const handleLogout = () => {
    dispatch(logoutHandler());
    toast.success("Logged out successfully")
    navigate("/")
  }


  return (
    <div className='sidebar-container'>
      <div>
        <img className='logo-homepage' src={logo} alt="logo" onClick={()=> navigate('/home')}/>
      </div>
      <div className='item-container'>
        <p className='items' onClick={()=> navigate("/home")}> <i className="fa-solid fa-house side-icon"></i> Home</p>
        <p className='items' onClick={()=> navigate("/explore")}><i className="fa-solid fa-hashtag side-icon"></i> Explore</p>
        <p className='items' onClick={()=> navigate("/bookmarks")}> <i className="fa-regular fa-bookmark side-icon"></i> Bookmarks</p>
        <p className='items' onClick={()=> navigate(`/profile/${user?.username}`)}> <i className="fa-regular fa-user side-icon"></i> Profile</p>
      </div>

      <div className='profile-settings' onClick={()=> setBoxOpen(boxOpen => !boxOpen)}>
      {
        user?.userPhoto ? 
        <img className='profile-img' src={user?.userPhoto} alt="profile-img" loading='lazy'/>
        :
        <img className='profile-img' src={avatar} alt="profile-img" loading='lazy'/>
      }
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
        {
          user?.userPhoto ?
        <img className='profile-img' src={user?.userPhoto} alt="profile-img" loading='lazy'/>
          :
        <img className='profile-img' src={avatar} alt="profile-img" loading='lazy'/>
          
        }
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