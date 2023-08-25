import React from 'react';
import "./Explore.css";
import MessageBox from '../../components/messageBox/MessageBox'
import RightSidebar from '../../components/sidebar/RightSidebar'
import LeftSidebar from '../../components/sidebar/LeftSidebar'

const Explore = () => {
  return (
    <div>
        <LeftSidebar />
      
      <div className='homepage-box'>
          <p className='homepage'>Explore</p>
      </div>

      <div className='explore-msg-box'>
          <MessageBox />
      </div>

      <RightSidebar />

    </div>
  )
}

export default Explore