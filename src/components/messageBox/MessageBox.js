import React, { useState } from 'react';
import "./MessageBox.css"
import { toast } from 'react-toastify';

const MessageBox = () => {

  const [likedNumber, setLikedNumber] = useState(1000);
  const [liked, setLiked] = useState(false);

  const [bookmarked, setBookmarked] = useState(false);

  return (
    <div className='message-container'>
      <div>
        <img className='msg-img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZcAWjfimDKnKCj3C-Jv4NZLaGIOLxtuwGr3IcLDQ4&s" alt="img" />
      </div>
      <div className='msg-input'>
        <div className="msg-sender"> 
          <p className='msg-id'>Elon Musk</p>
          <p className='msg-id-two'>@elonmusk</p>
        </div>
        <p className='msg-text'>Akash, I personally liked your projects. Well done!! </p>

        <div className='msg-icons'>
        {
          !liked ? 
          <p className='action-icons' onClick={()=> {setLiked(true);
          toast.success("Liked post")
          }}><i class="fa-regular fa-heart " ></i> {likedNumber }</p>
          :
          <p className='action-icons' onClick={()=> {setLiked(false);
          toast.success("Unliked post")
          }}><i class="fa-solid fa-heart  red-heart" ></i>{likedNumber +1 } </p>
        }
          <p className='action-icons'><i class="fa-regular fa-comment "></i> 0</p>
          {
            !bookmarked ?
          <p className='action-icons' onClick={()=>{
            setBookmarked(true);
            toast.success("Added to Bookmarks !");
          }}><i class="fa-regular fa-bookmark "></i> </p>
          :  
          <p className='action-icons' onClick={()=>{
            setBookmarked(false);
            toast.success("Removed from Bookmarks !");
          }}><i class="fa-solid fa-bookmark blue-bookmarked"></i> </p>
          }
        </div>
      </div>
    </div>
  )
}

export default MessageBox