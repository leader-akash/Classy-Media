import React, { useState } from 'react'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../contexts/user-context';
import { toast } from 'react-toastify';
import axios from 'axios';

const LoginModal = ({ loginOpen, openLoginModal, closeLoginModal }) => {

  const navigate = useNavigate();

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const [usernameVal, setUsernameVal] = useState();
  const [passwordVal, setPasswordVal] = useState();
  const { getToken, setGetToken } = useUser();


  const handlePasswordVisible = () => {
    setIsPasswordVisible(prev => !prev);
  }

  const handleUsername = (e) => {
    setUsernameVal(e.target.value);
  }

  const handlePassword = (e) => {
    setPasswordVal(e.target.value);
  }

  const handleLoginAsGuest = (e) => {
    setUsernameVal("AkashKing");
    setPasswordVal("akash123")
    navigate("/home")
  }

  const handleLogin = (e) => {
    e.preventDefault();
    axios.post(`/api/auth/login`, {
      username : usernameVal,
      password: passwordVal,
    })
      .then((res) => {
        console.log("usr", res)
        localStorage.setItem("token", res.data?.encodedToken);
        localStorage.setItem("userinfo", JSON.stringify(res?.data?.foundUser))
        setGetToken(res?.data?.encodedToken);
        toast.success(`welcome back, ${res.data?.foundUser?.name} 🎉`)
        navigate("/home");
      })
      .catch((err) => {
        console.log("err", err)
        toast.error('User not found')
      })
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
                <input className='input-box' type="text" id="login-email" placeholder="akash@mail.com" onChange={handleUsername} value={usernameVal} required />
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

                <button className="signin-guest" type="submit" onClick={handleLoginAsGuest}>Login as Guest</button>
              </div>


            </form>
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default LoginModal