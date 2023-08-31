import React from 'react';
import "./Explore.css";
import MessageBox from '../../components/messageBox/MessageBox'
import RightSidebar from '../../components/sidebar/RightSidebar'
import LeftSidebar from '../../components/sidebar/LeftSidebar'
import { useSelector } from 'react-redux';

const Explore = () => {

  const {posts} = useSelector((state)=> state.post)


  return (
    <div>
        <LeftSidebar />
      
      <div className='homepage-box'>
          <p className='homepage'>Explore</p>
      </div>

      <div className='explore-msg-box'>
      {
        posts.map((el)=> (
          <MessageBox
            details={el}
           />
        ))
      }
      </div>

      <RightSidebar />

    </div>
  )
}

export default Explore