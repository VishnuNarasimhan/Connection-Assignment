import React from 'react';
import headerImg from '../../utils/ronaldo.jpg';
import './header.css';
import { BsBell, BsThreeDotsVertical, BsSortUp } from 'react-icons/bs';
import { AiOutlineMessage } from 'react-icons/ai';

function Header() {
  return (
    <div className='header-component'>
      <div className='header-content'>
        <img src={headerImg} alt='headerImg' className='header-image' />
        <input
          type='text'
          className='header-input'
          placeholder='Candidate Search'
        />
        <BsSortUp className='header-image-icon' />
        <div className='header-icon'>
          <div>
            <AiOutlineMessage className='header-message-icon' />
            <p className='header-message-p'>Message</p>
          </div>
          <div>
            <BsBell className='header-bell-icon' />
            <p className='header-bell-p'>Notification</p>
          </div>
          <div>
            <BsThreeDotsVertical className='header-dots-icon' />
            <p className='header-dots-p'>Settings</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
