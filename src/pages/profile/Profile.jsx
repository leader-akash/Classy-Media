import React, { useState, useEffect } from 'react';
import "./Profile.css"
import LeftSidebar from '../../components/sidebar/LeftSidebar';
import MessageBox from '../../components/messageBox/MessageBox';
import RightSidebar from '../../components/sidebar/RightSidebar';
import { Link, useLocation, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPostsByUsername } from '../../redux/slice/postSlice';
import EditModal from '../../components/modals/edit-modal/EditModal';
import { editUser, followUser, unFollowUser } from '../../redux/slice/authSlice';
import avatar from '../../assets/avatar.png'
import { getUserById } from '../../redux/slice/userSlice';

const Profile = () => {
  const {username} = useParams();

  const location = useLocation();

  const [editModalOpen, setEditModalOpen] = useState(false);

  const { post: {postByUsername, error, loading}, auth: {user},  } = useSelector((state) =>( {post: state.post, auth: state.auth
  }));


  const {usersData, selectedUser} = useSelector((state)=> state.user);  

  const [singleUser, setSingleUser] = useState(user);

  useEffect(()=>{
    const currentUser = usersData?.find((item)=> item?.username === username);
    
    if(currentUser){
      setSingleUser(currentUser)
      
    }
    else{
      setSingleUser(user);
    }
  }, [user, usersData, user?.username, postByUsername])


  const dispatch = useDispatch();


  if(postByUsername !== singleUser?.usrname){

  }

  useEffect(() => {
    // if(singleUser?.username === user?.usrname){
    dispatch(getAllPostsByUsername(user?.username))
    // }
  }, [user, postByUsername])

  const closeEditModal = () => {

    setEditModalOpen(false);
  }


  return (
    <div>
          <LeftSidebar />
      
      <div className='homepage-box'>
          <p className='homepage'>Profile</p>
      </div>

      <div className='profile-container'>
      {singleUser?.coverPhoto ?
        <img className='bg-img' src={singleUser?.coverPhoto} loading='lazy' alt="bg-img" />
        : 
        <img className='bg-img' src='https://static.vecteezy.com/system/resources/thumbnails/006/277/661/small/studio-empty-background-wall-and-floor-grunge-texture-cement-concrete-display-scene-free-photo.jpg' loading='lazy' alt="bg-img" />
      }

        <div className='user-settings'>
        {
          singleUser?.userPhoto ? 
          <img className='profile-image' src={singleUser?.userPhoto} loading='lazy' alt="profile-img" />
          :
          <img className='profile-image' src={avatar} loading='lazy' alt="profile-img" />
        }
        {
          singleUser?.username === user?.username ?
          (<button className='edit-profile' onClick={()=> {setEditModalOpen(true)}}>Edit profile</button>)
          :
          user?.following?.some((el)=> el?.username === singleUser?.username) 
          ?
          (<button className='follow-btn unfollow-btn' onClick={() => {dispatch(unFollowUser(singleUser?._id));
        }}>Following</button>)
        :
        (<button className='follow-btn' onClick={() => {dispatch(followUser(singleUser?._id));
         }}>Follow</button>)
        }
        </div>

        <div className='username-userid'>
          <p className='user-username'>{singleUser?.firstName}</p>
          <p className='user-userid'>{singleUser?.username}</p>
        </div>

        <div className='user-bio'>
        <p className='user-info'>{singleUser?.bio}</p>
        <Link className='github-link' to={singleUser?.link} target="_blank" >{singleUser?.link}</Link>
        </div>

        <div className='following-info'>
            <p className='following'> {singleUser?.following?.length} Following</p>
            <p className='followers'> {singleUser?.followers?.length} Follower</p>
        </div>

      </div>

      <div className='profile-msg-box'>
      {
        postByUsername?.map((el)=> (
          <MessageBox
            details={el}
           />
        ))
      }
      </div>

      <RightSidebar />

      <EditModal 
         editOpen={editModalOpen}
                openEditModal={editModalOpen}
                closeEditModal={closeEditModal}
      />

    </div>
  )
}

export default Profile