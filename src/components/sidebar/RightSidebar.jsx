import React, { useState }  from 'react';
import "./RightSidebar.css";
import { userData } from '../../userData/UserData.data';
import { Link } from 'react-router-dom';

const RightSidebar = () => {

  const [follow, setFollow] = useState(false);

  return (
    <div className='right-sidebar'>
      <div className='right-content'>
        <p className='follow'>Who to follow</p>

        {
          userData.map((el, i) => (

            <div className='profile-settings right-profile'>
              <img className='right-profile-img' src={el.profileImg} alt="profile-img" />
              <div className='right-profile-info'>
                <p className='right-profile-name'>{el.userName}</p>
                <small className='right-profile-id'>{el.userId}</small>
              </div>
              
              {
                follow ?
              <button className='follow-btn unfollow-btn' onClick={()=> setFollow(follow => !follow)}>Following</button>
              :
              <button className='follow-btn' onClick={()=> setFollow(follow => !follow)}>Follow</button>
              }
            </div>
          ))
        }

      </div>
      <Link className="connect-with-me" to="https://twitter.com/AkashAk50675432" target="_blank">
        <p className='connect-with-me'>Connect with me 🏹</p>
      </Link>

    </div>
  )
}

export default RightSidebar