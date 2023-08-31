import axios from 'axios';
import React, { createContext, useContext, useState } from 'react'
import { useUser } from './user-context';

const PostContext = createContext(null);

const PostProvider = ({children}) => {

    const [postData, setPostData] = useState();
    const {getToken} = useUser();
    const [textVal, setTextVal] = useState("");

    const handleTweet = (e) => {
      e.preventDefault()
      axios.post(`/api/posts`,
      {
          postData: textVal
      },
      {
          headers: {
              authorization: getToken
          }
      })
      .then((res) => {
          setPostData(res?.data?.posts)
      })
      .catch((err) => {
          console.log('post-err', err)
      })
  }
    

  return (
    <PostContext.Provider value={{postData, setPostData,handleTweet,textVal, setTextVal}}>
        {children}
    </PostContext.Provider>
  )
}

const usePost = () => useContext(PostContext);

export  {PostProvider, usePost}