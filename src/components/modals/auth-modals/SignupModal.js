import React, { useState, useEffect } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { useLocation, useNavigate } from 'react-router-dom';
import "./AuthModal.css"
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../../../redux/slice/authSlice';

const SignupModal = ({ signupOpen, openModal, closeSignupModal }) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const [nameVal, setNameVal] = useState("");
  const [usernameVal, setUsernameVal] = useState();
  const [passwordVal, setPasswordVal] = useState();
  const [confirmPasswordVal, setConfirmPasswordVal] = useState();
  const [isPasswordMatch, setIsPasswordMatch] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [])

  const {token} = useSelector((state)=>state.auth);

  const from = location.state?.from?.pathname || '/home'

  useEffect(()=>{
    token && navigate(from, {replace: true});

  },[token]);

  const handlePasswordVisible = () => {
    setIsPasswordVisible(prev => !prev)
  }



  const handlePassword = (e) => {
    setPasswordVal(e.target.value);
  }

  const handleConfirmPassword = (e) => {
    setConfirmPasswordVal(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signup({ firstName: nameVal, username: usernameVal, password: passwordVal }))
    navigate("/home");
  }

  return (
    <Modal classNames="signupModal" open={signupOpen} onClose={closeSignupModal} center>

      <div className="input-container signup-form">
        <h2 className='login-header'>Signup</h2>
        <form id="signupForm" onSubmit={handleSubmit}>
          <div>
            <label className="form-inputs"> Name </label>
            <input className='input-box' type="text" id="fullName" placeholder="Akash" value={nameVal}  onChange={(e) => setNameVal(e.target.value)} maxLength={12} required />
          </div>
          <div>
            <label className="form-inputs" > Username </label>
            <input className='input-box' type="text" id="email" placeholder="Akash123" value={usernameVal} onChange={(e) => setUsernameVal(e.target.value)} maxLength={12} required />
          </div>
          <div>
            <label className="form-inputs"> Password </label>
            <input className='input-box' value={passwordVal} onChange={handlePassword} type={isPasswordVisible ? "text" : "password"} id="password" placeholder="Password" required />
            <i className={`far  ${isPasswordVisible ? 'fa-eye' : 'fa-eye-slash'}`} style={{ marginLeft: '-30px', cursor: 'pointer' }} onClick={handlePasswordVisible}></i>
          </div>
          <div>
            <label className="form-inputs"> Confirm Password </label>
            <input className='input-box' value={confirmPasswordVal} onChange={handleConfirmPassword} type="password" id="confirmPassword" placeholder="Confirm Password" required />
          </div>
          <div id="errorContainer" >
            {
              isPasswordMatch ? "Password do not match" : null
            }
          </div>

          <div>
            <button className="sign-button" type="submit">Signup</button>
          </div>

        </form>
      </div>
    </Modal>
  )
}

export default SignupModal