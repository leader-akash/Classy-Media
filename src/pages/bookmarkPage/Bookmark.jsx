import React from 'react';
import "./Bookmark.css";
import MessageBox from '../../components/messageBox/MessageBox'
import RightSidebar from '../../components/sidebar/RightSidebar'
import LeftSidebar from '../../components/sidebar/LeftSidebar'

const Bookmark = () => {
  return (
    <div>
        <LeftSidebar />
      
      <div className='homepage-box'>
          <p className='homepage'>Bookmark</p>
      </div>

      <div className=' bookmarks'>
            Nothing to show...
        {/* <div className='explore-msg-box'>
            <MessageBox />
        </div> */}
      </div>

      

      <RightSidebar />

    </div>
  )
}

export default Bookmark