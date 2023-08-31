import React, { createContext, useContext, useState } from 'react'

const LikeContext = createContext(null);

const LikeProvider = ({children}) => {

    const [likedData, setLikedData] = useState();

    


  return (
    <LikeContext.Provider value={{likedData, setLikedData}}>
        {children}
    </LikeContext.Provider>
  )
}

const useLike = () => useContext(LikeContext);

export  {LikeProvider, LikeContext}