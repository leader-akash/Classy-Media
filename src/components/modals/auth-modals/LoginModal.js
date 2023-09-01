import React, { useEffect, useState } from 'react'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../../redux/slice/authSlice';

const LoginModal = ({ loginOpen, openLoginModal, closeLoginModal }) => {

  const navigate = useNavigate();
  const location = useLocation();

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const [usernameVal, setUsernameVal] = useState('');
  const [passwordVal, setPasswordVal] = useState('');
  const {token} = useSelector((state)=>state.auth);

  const dispatch = useDispatch();

  const from = location.state?.from?.pathname || '/home'

  useEffect(()=>{
    token && navigate(from, {replace: true});
  },[token])

  const handleUsername = (e) => {
    setUsernameVal(e.target.value);
  }
  const handlePasswordVisible = () => {
    setIsPasswordVisible(prev => !prev);
  }

  const handlePassword = (e) => {
    setPasswordVal(e.target.value);
  }

  // const handleLoginAsGuest = (e) => {
  //     setUsernameVal("Akash123");
  //     setPasswordVal("akash123")
  // }

  const data = {
    username: usernameVal,
    password: passwordVal
  }

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('abc', data)
    dispatch(loginUser(data))
    // navigate("/home");

  }


  const handleLoginAsGuest = (e) => {
    e.preventDefault();
    dispatch(loginUser({ username: 'akash123', password: 'akash123' }))
    // navigate("/home");
  }

  return (
    <Modal open={loginOpen} onClose={closeLoginModal} center>
      <div className='login-page'>
        <div>
          <div className="login-container login-form">
            <h2 className='login-header '>Login</h2>
            <form id="loginForm" onSubmit={handleLogin}>
              <div>
                <label className="form-inputs"> Username </label>
                <input className='input-box' type="text" id="login-email" placeholder="Akash123" onChange={handleUsername} value={usernameVal} required />
              </div>
              <div>
                <label className="form-inputs"> Password </label>
                <input className='input-box' onChange={handlePassword} value={passwordVal} type={isPasswordVisible ? 'text' : 'password'} id="loginPassword" placeholder="******" required />
                <i onClick={handlePasswordVisible} className={`far ${isPasswordVisible ? 'fa-eye' : 'fa-eye-slash'}`} id="togglePassword" style={{ marginLeft: '-30px', cursor: 'pointer' }}

                ></i>
                {/* <i className="far  fa-eye-slash" style={{marginLeft: '-30px'}}></i> */}
              </div>
              <div className='test-credentials test-info'>
                <label className='remember-me'>
                  <input className="remember-checkbox" type="checkbox" name="keeplogin" />
                  Remember me
                </label>

                <p className='forgot-password'>Forgot Password?</p>
              </div>
              <div id="login-errorContainer"></div>
              <div>
                <button className="signin-button" type="submit" >Login</button>

                <button className="signin-guest" type="submit" value="guest" onClick={handleLoginAsGuest}>Login as Guest</button>
              </div>


            </form>
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default LoginModal