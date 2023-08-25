import React from 'react';
import "./Profile.css"
import LeftSidebar from '../../components/sidebar/LeftSidebar';
import MessageBox from '../../components/messageBox/MessageBox';
import RightSidebar from '../../components/sidebar/RightSidebar';
import { Link } from 'react-router-dom';

const Profile = () => {
  return (
    <div>
          <LeftSidebar />
      
      <div className='homepage-box'>
          <p className='homepage'>Profile</p>
      </div>

      <div className='profile-container'>
        <img className='bg-img' src='https://o.remove.bg/downloads/bcc5cc9a-86c9-464c-be17-563ede297661/png-clipart-laptop-gaming-computer-origin-pc-desktop-computers-personal-computer-laptop-game-electronics-removebg-preview.png' alt="bg-img" />

        <div className='user-settings'>
          <img className='profile-image' src="https://pbs.twimg.com/profile_images/1514842645260292097/dPW4KAZA_400x400.jpg" alt="profile-img" />

          <button className='edit-profile'>Edit profile</button>
        </div>

        <div className='username-userid'>
          <p className='user-username'>Akash</p>
          <p className='user-userid'>@AkashKing1</p>
        </div>

        <div className='user-bio'>
        <p className='user-info'>Aspiring Full Stack developer 👨‍💻 | learning and sharing | </p>
        <Link className='github-link' to="https://github.com/leader-akash" >https://github.com/leader-akash</Link>
        </div>

        <div className='following-info'>
            <p className='following'> 0 Following</p>
            <p className='followers'> 0 Follower</p>
        </div>

      </div>

      <div className='profile-msg-box'>
          <MessageBox />
      </div>

      <RightSidebar />

    </div>
  )
}

export default Profile