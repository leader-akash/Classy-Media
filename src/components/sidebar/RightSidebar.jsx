import React, { useState, useEffect } from 'react';
import "./RightSidebar.css";
// import { userData } from '../../userData/UserData.data';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { followUser, unFollowUser } from '../../redux/slice/authSlice';
import { getAllUsers, getUserById } from '../../redux/slice/userSlice';
import avatar from '../../assets/avatar.png'

const RightSidebar = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);

  const { usersData, error, loading } = useSelector((state) => state.user);

  const [follow, setFollow] = useState(true);

  useEffect(() => {
    dispatch(getAllUsers())
  }, [user?.following])

console.log('userrrrr', user)
console.log('userrrrr-user', usersData)

  return (
    <div className='right-sidebar'>
      <div className='right-content'>
        <p className='follow'>Who to follow</p>

        {
          usersData.filter((el, i) => el?.username !== user?.username).map((currentUser, i) => (
            <div key={i} className='suggest-user'>
              <div className='profile-settings right-profile' onClick={() => navigate(`/profile/${currentUser?.username}`, { state: { username: currentUser?.username } })}>
                {
                  currentUser?.userPhoto ?
                    <img className='right-profile-img' src={currentUser?.userPhoto} alt="profile-img" loading='lazy' />
                    :
                    <img className='right-profile-img' src={avatar} alt="profile-img" loading='lazy' />

                }
                <div className='right-profile-info'>
                  <p className='right-profile-name'>{currentUser?.firstName}</p>
                  <small className='right-profile-id'>@{currentUser?.username}</small>
                </div>

                {/* <div className='follow-unf-btn'>
                  {
                    user?.following?.length && user?.following?.some((followingUser) => followingUser?._id == currentUser?._id) ?

                      (<button className='follow-btn unfollow-btn' onClick={() => {
                        dispatch(unFollowUser(currentUser?._id));
                        setFollow(false);
                      }}>Following</button>)
                      :
                      (<button className='follow-btn' onClick={() => {
                        dispatch(followUser(currentUser?._id));
                        setFollow(false);
                      }}>Follow</button>)

                  }
                </div> */}
              </div>
              <div className='follow-unf-btn'>
                  {
                    user?.following?.length && user?.following?.some((el)=> el?.username === currentUser?.username ) ?

                      (<button className='follow-btn unfollow-btn' onClick={() => {
                        dispatch(unFollowUser(currentUser?._id));
                        setFollow(false);
                      }}>Following</button>)
                      :
                      (<button className='follow-btn' onClick={() => {
                        dispatch(followUser(currentUser?._id));
                        setFollow(false);
                      }}>Follow</button>)
                    
                  }
                </div>
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