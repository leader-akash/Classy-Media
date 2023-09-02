import React, { useEffect, useState } from 'react';
import "./TweetBox.css";
import axios from 'axios';
import { createPost } from '../../redux/slice/postSlice';
import { useDispatch, useSelector } from 'react-redux';
import avatar from '../../assets/avatar.png'

const TweetBox = () => {

  const [textLimit, setTextLimit] = useState(210);
  // const {postData, setPostData, textVal, setTextVal, handleTweet} = usePost();
  const [textVal, setTextVal] = useState("");


  const { user } = useSelector((state) => state.auth);

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
      postPic: postImage
    }));
    setTextVal('');
    setPostImage('');
    setTextLimit(210);
  }


  // image part

  const [postImage, setPostImage] = useState();
  const [previews, setPreviews] = useState();

  const handlePostImage = async (e) => {
    const file = e.target?.files[0];
    const toBase64 = (file) =>

      new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result)
        reader.onerror = (err) => reject(err);
      });

    try {
      let base64File = await toBase64(file);
      setPostImage(base64File);

    }
    catch (err) {
      console.log('img-select-err', err)
    }
  }

  console.log('images', postImage)

  return (
    <form className='tweet-container' onSubmit={handleSubmit}>
      <div>
        {user?.userPhoto ?
          <img className='tweet-img' src={user?.userPhoto} alt="img" loading='lazy' />
          :
          <img className='tweet-img' src={avatar} alt="img" loading='lazy' />
        }
        {/* <img className='tweet-img' src={user?.userPhoto} alt="img"  loading='lazy'/> */}

      </div>
      {/* <form> */}
      <div>
        <textarea className='tweet-input' required rows={3} cols={40} placeholder="What's happening?" maxLength={210} value={textVal} onChange={(e) => handleText(e)}></textarea>
      </div>
      <div>
        {
          postImage ?
            <img className='post-img-pic' src={postImage} alt='img' />
            :
            ''
        }
      </div>
      <p className='cancel-image' onClick={()=>setPostImage('')}>
      {
        postImage ?
        <i class="fa fa-window-close" aria-hidden="true"></i>
        :
        ''
      }
      </p>
      <div className='tweet-footer'>
        <div className='img-gif-content'>
          <label for='choose-img' className=''>
            <i className="fa-regular fa-image img-btn"></i>
            <input type='file' id='choose-img'
              style={{ display: 'none', visibility: 'none' }}
              accept="image/apng, image/avif, image/gif, image/jpeg, image/png, image/svg+xml, image/jpg,image/webp"
              multiple
              onChange={handlePostImage}
            />
          </label>

          {/* <p className='gif'>Gif</p>
          <i className="fa-regular fa-face-smile smile-btn"></i> */}
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