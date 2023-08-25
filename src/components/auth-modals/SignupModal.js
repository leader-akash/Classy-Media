import React, { useState } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { useNavigate } from 'react-router-dom';
import "./AuthModal.css"
import { toast } from 'react-toastify';
import axios from 'axios';
import { useUser } from '../contexts/user-context';

const SignupModal = ({ signupOpen, openModal, closeSignupModal }) => {

    const navigate = useNavigate();

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const [nameVal, setNameVal] = useState("");
    const [usernameVal, setUsernameVal] = useState();
    const [passwordVal, setPasswordVal] = useState();
    const [confirmPasswordVal, setConfirmPasswordVal] = useState();
    const [isPasswordMatch, setIsPasswordMatch] = useState(false);
    const { setGetToken } = useUser();

    const handlePasswordVisible = () => {
        setIsPasswordVisible(prev => !prev)
    }

    const handleName = (e) => {
        setNameVal(e.target.value);
    }

    const handleUsername = (e) => {
        setUsernameVal(e.target.value);
    }

    const handlePassword = (e) => {
        setPasswordVal(e.target.value);
    }

    const handleConfirmPassword = (e) => {
        setConfirmPasswordVal(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (passwordVal !== confirmPasswordVal) {
            setIsPasswordMatch(true);
        }
        else {
            axios.post(`/api/auth/signup`, {
                name: nameVal,
                username: usernameVal,
                password: passwordVal
            })
                .then((res) => {
                    console.log("data", res)
                    // localStorage.setItem("token", res.data?.encodedToken);
                    // localStorage.setItem("userinfo", JSON.stringify(res.data?.createdUser));
                    // setGetToken(res.data?.encodedToken)
                    // toast.success(`Hi ${nameVal}, Welcome  to Classy Media 💖`)
                    // navigate("/home");
                })
                .catch((err) => {
                    console.log("err-sign", err);
                    toast.error("User already exists 😔")
                })
        }
    }


    return (
        <Modal classNames="signupModal" open={signupOpen} onClose={closeSignupModal} center>
            <div className="input-container signup-form">
                <h2 className='login-header'>Signup</h2>
                <form id="signupForm" onSubmit={handleSubmit}>
                    <div>
                        <label className="form-inputs"> Name </label>
                        <input className='input-box' type="text" id="fullName" placeholder="Akash" value={nameVal} onChange={handleName} required />
                    </div>
                    <div>
                        <label className="form-inputs" > Username </label>
                        <input className='input-box' type="text" id="email" placeholder="AkashKing" value={usernameVal} onChange={handleUsername} required />
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