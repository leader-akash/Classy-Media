import React, { useState, useEffect } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { useNavigate } from 'react-router-dom';
import "./EditModal.css"
// import "../auth-modals/AuthModal.css"
import { useDispatch, useSelector } from 'react-redux';
import { editUser } from '../../../redux/slice/authSlice';
import avatar from '../../../assets/avatar.png'

const EditModal = ({ editOpen, openEditModal, closeEditModal }) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [])

  const [nameVal, setNameVal] = useState(user?.firstName);

  const [bioLink, setBioLink] = useState(user?.link);

  const [bio, setBio] = useState(user?.bio);

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(editUser({ firstName: nameVal, link: bioLink, bio: bio }));
    closeEditModal();
  }




  return (
    <Modal classNames="edit-modal" open={editOpen} onClose={closeEditModal} center>

      <div className="input-container signup-form">
        <h2 className='login-header'>Edit Profile</h2>
        <form  className='edit-user-form' onSubmit={(e) => handleUpdate(e)}>
          <div className='bg-edit-cover'>
          {
            user?.coverPhoto ?
            <img className='edit-bg-img' src={user?.coverPhoto} alt='bg-img' />
            :
            <img className='edit-bg-img' src='https://static.vecteezy.com/system/resources/thumbnails/006/277/661/small/studio-empty-background-wall-and-floor-grunge-texture-cement-concrete-display-scene-free-photo.jpg' alt='bg-img' />
          }
          </div>
          <p>
          <i class="fas fa-camera edit-bg-camera"></i>
          </p>
          <div>
          {
            user?.userPhoto ?
            
            <img  className='edit-user-img' src={user?.userPhoto} alt='img' />
            :
            
            <img className='edit-user-img' src={avatar} alt='img' />

          }
          <p>
          <i class="fas fa-camera edit-camera"></i>
          </p>
          </div>
          <div>
            <label className="form-inputs label-name"> Name </label>
            <input className='input-box' type="text" id="fullName" placeholder="Akash" value={nameVal} onChange={(e) => setNameVal(e.target.value)} />
          </div>
          <div>
            <label className="form-inputs label-name" > Bio Link </label>
            <input className='input-box' value={bioLink} onChange={(e) => setBioLink(e.target.value)} />
          </div>
          <div>
            <label className="form-inputs label-name"> Bio </label>
            <textarea className='input-box textarea-input' rows={2} cols={1} value={bio} onChange={(e) => setBio(e.target.value)} />
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