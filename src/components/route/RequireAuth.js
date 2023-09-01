import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import {useSelector} from 'react-redux';


const RequireAuth = () => {
    const {token} = useSelector((state)=>state.auth);
    const location = useLocation();
  return token ?
    <Outlet/>
    :
    <Navigate to='/' state={{from: location}} replace />
  
}

export default RequireAuth