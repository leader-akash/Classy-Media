import React, { useState } from 'react';
import "./TweetBox.css";
import axios from 'axios';
import { useUser } from '../../contexts/user-context';
import { usePost } from '../../contexts/post-context';
import { createPost } from '../../redux/slice/postSlice';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const TweetBox = () => {

    const [textLimit, setTextLimit] = useState(210);
    const {getToken} = useUser();
    // const {postData, setPostData, textVal, setTextVal, handleTweet} = usePost();
    const [textVal, setTextVal] = useState("");
    

    const {user} = useSelector((state)=>state.auth);

    const dispatch = useDispatch();

    const handleText = (e) => {
        setTextLimit(210 - e.target.value.length);
        setTextVal(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        dispatch(createPost({
            firstName: user?.firstName,
            userPhoto: user?.userPhoto,
            content: textVal,
        }))
        setTextVal('');
        setTextLimit(210);
    }
    

  return (
    <form className='tweet-container' onSubmit={handleSubmit}>
        <div>
            <img className='tweet-img' src="https://pbs.twimg.com/profile_images/1514842645260292097/dPW4KAZA_400x400.jpg" alt="img" />
        </div>
        {/* <form> */}
        <div>
            <textarea className='tweet-input' required rows={5} cols={60} placeholder="What's happening?" maxLength={210} value={textVal}  onChange={(e)=>handleText(e)}></textarea>
        </div>
        <div className='tweet-footer'>
            <div className='img-gif-content'>
            <i className="fa-regular fa-image img-btn"></i>
            <p className='gif'>Gif</p>
            <i className="fa-regular fa-face-smile smile-btn"></i>
            </div>

            <div className='count-tweet-btn'>
            <p className='text-limit'>{textLimit}</p>
            <button className='tweet-btn' type='submit' >Post</button>
            </div>
        </div>
        {/* </form> */}
        
    </form>
  )
}

export default TweetBox