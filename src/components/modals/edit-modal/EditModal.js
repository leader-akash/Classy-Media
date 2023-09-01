import React, { useState, useEffect } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { useNavigate } from 'react-router-dom';
import "./EditModal.css"
// import "../auth-modals/AuthModal.css"
import { useDispatch, useSelector } from 'react-redux';
import { editUser } from '../../../redux/slice/authSlice';

const EditModal = ({ editOpen, openEditModal, closeEditModal }) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {user} = useSelector((state)=> state.auth);

  const [usernameVal, setUsernameVal] = useState();
  const [passwordVal, setPasswordVal] = useState();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [])

  const [nameVal, setNameVal] = useState(user?.firstName);

  const [bioLink, setBioLink] = useState(user?.link);

  const [bio, setBio] = useState(user?.bio);

  const handlePassword = (e) => {
    setPasswordVal(e.target.value);
  }

const handleUpdate = (e) => {

  e.preventDefault();
  dispatch(editUser({firstName: nameVal, link: bioLink, bio: bio }));
  closeEditModal();
 }

  


  return (
    <Modal classNames="edit-modal" open={editOpen} onClose={closeEditModal} center>

      <div className="input-container signup-form">
        <h2 className='login-header'>Edit Profile</h2>
        <form id="signupForm" onSubmit={(e)=>handleUpdate(e)}>
          <div>
            <label className="form-inputs"> Name </label>
            <input className='input-box' type="text" id="fullName" placeholder="Akash" value={nameVal} onChange={(e) => setNameVal(e.target.value)} />
          </div>
          <div>
            <label className="form-inputs" > Bio Link </label>
            <input className='input-box' value={bioLink} onChange={(e) => setBioLink(e.target.value)} />
          </div>
          <div>
            <label className="form-inputs"> Bio </label>
            <textarea className='input-box textarea-input'  rows={1} cols={1}  value={bio} onChange={(e) => setBio(e.target.value)}/>
          </div>

          <div>
            <button className="sign-button" type="submit" >Update</button>
          </div>

        </form>
      </div>
    </Modal>
  )
}

export default EditModal