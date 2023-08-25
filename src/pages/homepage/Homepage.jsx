import React from 'react';
import "./Homepage.css";
import LeftSidebar from '../../components/sidebar/LeftSidebar';
import RightSidebar from '../../components/sidebar/RightSidebar';
import MessageBox from '../../components/messageBox/MessageBox';
import TweetBox from '../../components/tweetBox/TweetBox';

const Homepage = () => {
  return (
    <div>
      <LeftSidebar />
      
      <div className='homepage-box'>
          <p className='homepage'>Homepage</p>
          <p className='filter-btn'>✨</p>
      </div>

      <div className='tweetbox'>
        <TweetBox />

      </div>

      <div className='homepage-msg-box'>
          <MessageBox />
      </div>

      <RightSidebar />
    </div>
  )
}

export default Homepage