import React, { useState } from 'react';
import "./MessageBox.css"
import { toast } from 'react-toastify';
import { deletePostById, dislikePost, likePost } from '../../redux/slice/postSlice';
import { useDispatch, useSelector } from 'react-redux';
import { bookmarkPost, removeBookmark } from '../../redux/slice/bookmarkSlice';
import avatar from  '../../assets/avatar.png'

const MessageBox = ({ details }) => {


  const { user } = useSelector((state) => state.auth);

  const { posts, currentPost, loading, postActionLoading } = useSelector(
    (state) => state.post
  );

  const { bookmarks } = useSelector((state) => state.bookmark);


  const dispatch = useDispatch();

  const handleLike = (_id) => {
    dispatch(likePost(details?._id))
  }

  const handleDislike = () => {
    dispatch(dislikePost(details?._id))
  }

  const handleBookmarks = () => {
    dispatch(bookmarkPost(details?._id))
  }

  const handleRemoveBookmark = (_id) => {
    dispatch(removeBookmark(details?._id))
  }

  const handleDeletePost = () => {
    dispatch(deletePostById(details._id))
  }


  return (
    <div className='message-container'>
      <div>
      {
        details?.userPhoto ?
        <img className='msg-img' src={details?.userPhoto} alt="img" />
        :
        <img className='msg-img' src={avatar} alt="img" />
      }
      {/* <img className='msg-img' src={details?.userPhoto} alt="img" /> */}

      </div>
      <div className='msg-input'>
        <div className="msg-sender">
          <div className='post-user'>
            <p className='msg-id'>{details?.firstName}</p>
            <p className='msg-id-two'>@{details?.username}</p>
          </div>
          {
            user?.username === details?.username ?
              <p>
                <i className="fa fa-trash delete-btn" onClick={handleDeletePost}></i>
              </p>
              :
              ''
          }

        </div>
        <p className='msg-text'>{details.content}</p>

        <div className='msg-icons'>

          {details?.likes?.likedBy.length !== 0 &&
            details?.likes.likedBy.some((item) => item?.username === user?.username)
            ?
            <p className='action-icons' onClick={() => {
              handleDislike();
            }}>
              <i className="fa-solid fa-heart red-heart" ></i>{details?.likes?.likeCount} </p>
            :
            <p className='action-icons' onClick={() => {
              handleLike();
            }}>
              <i className="fa-regular fa-heart " ></i>{details?.likes?.likeCount} </p>
          }

          {/* comment section */}
          <p className='action-icons'><i className="fa-regular fa-comment "></i> 0</p>

          {/* bookmark */}
          {
            bookmarks?.length !== 0 && bookmarks?.some((bookmark) => bookmark?._id === details?._id) ?
              <p className='action-icons' onClick={() => {
                handleRemoveBookmark();
                toast.success("Removed from Bookmarks !");
              }}><i className="fa-solid fa-bookmark blue-bookmarked"></i> </p>

              :

              <p className='action-icons' onClick={() => {
                handleBookmarks()
                toast.success("Added to Bookmarks !");
              }}><i className="fa-regular fa-bookmark "></i> </p>
          }

        </div>
      </div>

    </div>
  )
}

export default MessageBox