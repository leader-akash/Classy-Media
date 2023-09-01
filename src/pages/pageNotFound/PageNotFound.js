import React from 'react'
import './PageNotFound.css'
import { useNavigate } from 'react-router-dom'

const PageNotFound = () => {
    const navigate = useNavigate();
  return (
    <div className='err-container'>
    <div className='error-page'>Error 404: PageNotFound</div>
    <button className='err-btn' onClick={()=> navigate('/home')}>Home</button>
    </div>
  )
}

export default PageNotFound