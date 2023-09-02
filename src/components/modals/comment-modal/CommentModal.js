import React, { useState, useEffect } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { useNavigate } from 'react-router-dom';
import "./CommentModal.css"
import { useDispatch, useSelector } from 'react-redux';
import avatar from '../../../assets/avatar.png'
import { addCommentByPostId, getCommentsByPostId } from '../../../redux/slice/postSlice';

const CommentModal = ({ openComment, setOpenComment, details, setCommentSent, commentSent }) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { posts, currentPost, loading, postActionLoading } = useSelector(
    (state) => state.post
  );
 
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

  useEffect(() => {
    dispatch(getCommentsByPostId(details?._id));
  }, [commentVal])
  const reversedComments = [...details?.comments].reverse();

  return (
    <Modal classNames="edit-modal" open={openComment} onClose={() => setOpenComment(false)} center>

      <div className="input-container signup-form comment-container">
        <h2 className='login-header'>Add comment</h2>
        <form id="signupForm" className='comment-form' onSubmit={(e) => handleAddComment(e)}>
          <div className='comment-items'>
            {
              user?.userPhoto ?
                <img className='comment-img' src={user?.userPhoto} alt='img' onClick={() => navigate(`/profile/${user?.username}`, { state: { username: user?.username } })} />
                :
                <img className='comment-img' src={avatar} alt='img' onClick={() => navigate(`/profile/${user?.username}`)} />
            }
            <input className='comment-box' type="text" id="fullName" placeholder="Write a comment..." value={commentVal} maxLength={60} onChange={(e) => setCommentVal(e.target.value)} required />
            <button className="reply-btn" type="submit" >Reply</button>
          </div>
        </form>
            
            <div className='comments-scroll'>
        {
          reversedComments && reversedComments.map((el) => (
            <div className='reply-msg'>
            <div className='reply-user-info'>
            {console.log('ccc', el)}
              {
                el?.comment?.avatar ?
                  <img className='reply-img' src={el?.comment?.avatar} alt='img' onClick={() => navigate(`/profile/${el?.username}` )} />
                  :
                  <img className='reply-img' src={avatar} alt='img' onClick={() => navigate(`/profile/${details?.comments?.username}`)} />
              }
              <p className='reply-user'>{el?.firstName}</p>
              <p className='reply-username'>{el?.username}</p>
              </div>
              <div className='comment-msg'>{el?.comment?.commentVal}</div>
            </div>
          ))
        }
            </div>
      </div>
    </Modal>
  )
}

export default CommentModal