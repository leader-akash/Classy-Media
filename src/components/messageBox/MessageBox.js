import React, { useEffect, useState } from 'react';
import "./MessageBox.css"
import { toast } from 'react-toastify';
import { addCommentByPostId, deletePostById, dislikePost, getCommentsByPostId, likePost } from '../../redux/slice/postSlice';
import { useDispatch, useSelector } from 'react-redux';
import { bookmarkPost, removeBookmark } from '../../redux/slice/bookmarkSlice';
import avatar from '../../assets/avatar.png'
import CommentModal from '../modals/comment-modal/CommentModal';
import { useNavigate } from 'react-router-dom';

const MessageBox = ({ details }) => {
  const [commentSent, setCommentSent] = useState(false);
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);

  const { posts, currentPost, loading, postActionLoading } = useSelector(
    (state) => state.post
  );

  console.log('pottttt', posts)
  const { bookmarks } = useSelector((state) => state.bookmark);

  const [openComment, setOpenComment] = useState(false)

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

  useEffect(() => {
    if (loading === 'idle') {
      dispatch(getCommentsByPostId(details?._id));
    }
    setCommentSent(false) 
  }, [details, openComment])

  const [commentVal, setCommentVal] = useState('');
  

  const handleAddComment = (e) => {
    setCommentSent(true)
    e.preventDefault();
    dispatch(addCommentByPostId({
      comment: {
        commentVal,
        avatar: user?.userPhoto,
      },
      id: details?._id
    }))
    setCommentVal('');
    // closeCommentModal();
  }

  return (
    <div className='message-container'>
      <div>
        {
          details?.userPhoto ?
            <img className='msg-img' src={details?.userPhoto} alt="img" onClick={() => navigate(`/profile/${details?.username}`, { state: { username: details?.username } })} />
            :
            <img className='msg-img' src={avatar} alt="img" onClick={() => navigate(`/profile/${details?.username}`)} />
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
          <div>
          {
            details?.postPic ?
            <img className='post-message-img' src={details?.postPic} alt='img' />
            :
            ''
          }
          </div>
        <div className='msg-icons'>

          {details?.likes?.likedBy.length !== 0 &&
            details?.likes?.likedBy.some((item) => item?.username === user?.username)
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

          <p className='action-icons' onClick={() => setOpenComment(prev => !prev)}><i className="fa-regular fa-comment " ></i> {details?.comments?.length}</p>

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

      {/* comment */}

      {/* {
        openComment && 
        <div className="input-container signup-form">
        <h2 className='login-header'>Add comment</h2>
        <form id="signupForm" className='comment-form' onSubmit={(e) => handleAddComment(e)}>
          <div className='comment-items'>
            {
              user?.userPhoto ?
                <img className='comment-img' src={user?.userPhoto} alt='img' onClick={() => navigate(`/profile/${user?.username}`, { state: { username: user?.username } })} />
                :
                <img className='comment-img' src={avatar} alt='img' onClick={() => navigate(`/profile/${user?.username}`)} />
            }
            <input className='comment-box' type="text" id="fullName" placeholder="Write a comment..." value={commentVal} onChange={(e) => setCommentVal(e.target.value)} required />
            <button className="reply-btn" type="submit" >Reply</button>
          </div>
        </form>
        {console.log('llllll', details)}
        {
          details?.comments && details?.comments?.map((el) => {
            <div>
              {
                el?.comment?.avatar ?
                  <img className='comment-img' src={el?.comment?.avatar} alt='img' onClick={() => navigate(`/profile/${details?.comments?.username}`, { state: { username: user?.username } })} />
                  :
                  <img className='comment-img' src={avatar} alt='img' onClick={() => navigate(`/profile/${details?.comments?.username}`)} />
              }
              <div>{el?.comment?.commentVal}</div>
            </div>
          })
        }
      </div>
      } */}

      <CommentModal
        openComment={openComment}
        setOpenComment={setOpenComment}
        details={details}
        commentSent ={commentSent}
        setCommentSent = {setCommentSent}
      />
      {console.log('details', details)}
    </div>
  )
}

export default MessageBox