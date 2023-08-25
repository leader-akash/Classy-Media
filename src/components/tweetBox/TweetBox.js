import React, { useState } from 'react';
import "./TweetBox.css";

const TweetBox = () => {

    const [textLimit, setTextLimit] = useState(210);
    const [textVal, setTextVal] = useState("");

    const handleTextLimit = (e) => {
        setTextLimit(210 - e.target.value.length)
        setTextVal(e.target.value)
    }

  return (
    <div className='tweet-container'>
        <div>
            <img className='tweet-img' src="https://pbs.twimg.com/profile_images/1514842645260292097/dPW4KAZA_400x400.jpg" alt="img" />
        </div>
        <div>
            <textarea className='tweet-input' rows={5} cols={60} placeholder="What's happening?" maxLength={210} value={textVal}  onChange={handleTextLimit}></textarea>
        </div>
        <div className='tweet-footer'>
            <div className='img-gif-content'>
            <i className="fa-regular fa-image img-btn"></i>
            <p className='gif'>Gif</p>
            <i class="fa-regular fa-face-smile smile-btn"></i>
            </div>

            <div className='count-tweet-btn'>
            <p className='text-limit'>{textLimit}</p>
            <button className='tweet-btn'>Tweet</button>
            </div>
        </div>
        
    </div>
  )
}

export default TweetBox