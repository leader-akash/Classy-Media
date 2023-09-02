import React, { useEffect } from 'react';
import "./Homepage.css";
import LeftSidebar from '../../components/sidebar/LeftSidebar';
import RightSidebar from '../../components/sidebar/RightSidebar';
import MessageBox from '../../components/messageBox/MessageBox';
import TweetBox from '../../components/tweetBox/TweetBox';
import { getAllposts } from '../../redux/slice/postSlice';
import { useDispatch, useSelector } from 'react-redux';

const Homepage = () => {

  const dispatch = useDispatch();

  const { posts, error, loading } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(getAllposts())
  }, [])
  useEffect(() => {
    window.scrollTo({top: 0 , left: 0, behaviour : 'smooth'})
  }, [])

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
        {
          posts?.map((el, i) => (
            <MessageBox
              details={el}
              key={i} />
          ))}
      </div>
            {console.log('kkkk', posts)}
      <RightSidebar />
    </div>
  )
}

export default Homepage