import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { createContext } from 'react';


const UserContext = createContext(null);

const UserProvider = ({children}) => {

    const [getToken, setGetToken] = useState("");

    useEffect(()=>{
        setGetToken(localStorage.getItem("token"));
    },[])


  return (
    <UserContext.Provider value={{getToken, setGetToken }}>
        {children}
    </UserContext.Provider>
  )
}

const useUser = () => useContext(UserContext);

export {UserProvider, useUser}