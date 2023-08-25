import React from 'react';
import "./Authentication.css"
import { Link } from 'react-router-dom';
import logo from "../../assets/logo.png"

const Authentication = () => {
    return (
        <div className='auth-container'>
        <div>
            <img className='logo-img' src={logo} alt="logo" />
        </div>
            <div className='left-container'>
                <div>
                    <p className='app-logo'>Classy <span className='logo-design'>Media</span></p>
                </div>
                <div className='greetings-container'>
                    <p className='greeting-one'>Share moments</p>
                    <p className='greeting-two'>Connect</p>
                    <p className='greeting-three'>Know the world</p>
                </div>
                <div className='author'>
                    Made with 💖 by

                    <Link className='author-name' to="https://github.com/leader-akash" target='_blank'>
                        <span className='author-name'> <u>Akash</u> </span>
                    </Link>

                </div>
            </div>
            <div className='right-container'>
                <div className='auth-info'>
                    <div>
                        <p className='join-us'>Join Us</p>
                        <button className='signup-btn'>Signup now</button>
                    </div>
                    <div>
                        <p className='already-acc'>Already have an account ?</p>
                        <button className='login-btn'>Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Authentication