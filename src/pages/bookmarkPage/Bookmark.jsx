import React, { useEffect } from 'react';
import "./Bookmark.css";
import MessageBox from '../../components/messageBox/MessageBox'
import RightSidebar from '../../components/sidebar/RightSidebar'
import LeftSidebar from '../../components/sidebar/LeftSidebar'
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBookmarks } from '../../redux/slice/bookmarkSlice';

const Bookmark = () => {

  const {bookmarks} = useSelector((state)=> state.bookmark);

  

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getAllBookmarks())
  }, [])

  return (
    <div>
        <LeftSidebar />
      
      <div className='homepage-box'>
          <p className='homepage'>Bookmark</p>
      </div>

      {
        bookmarks.length === 0 ? 
        <div className=' bookmarks'>
            Nothing to show...
         </div>
      :
      <div className='explore-msg-box'>
          {
            bookmarks?.map((el)=> (
            <MessageBox 
              details={el}
            />
            ))
          }
        </div>
      }
      
      
      

      <RightSidebar />

    </div>
  )
}

export default Bookmark