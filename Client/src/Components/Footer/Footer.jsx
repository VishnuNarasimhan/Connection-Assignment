import React from 'react';
import './footer.css';
import { AiFillPlaySquare } from 'react-icons/ai';
import { AiOutlineHome } from 'react-icons/ai';
import { BsPeople } from 'react-icons/bs';
import { MdOutlineLocalGroceryStore } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer-content'>
        <div className='footer-contents'>
          <AiOutlineHome className='footer-contents-icon' />
          <p className='footer-contents-p'>Home</p>
        </div>
        <div>
          <BsPeople className='footer-contents-icon' />
          <p className='footer-contents-p'>Connection</p>
        </div>
        <div>
          <AiFillPlaySquare className='footer-contents-icon' />
          <p className='footer-contents-p'>Explore</p>
        </div>
        <div>
          <MdOutlineLocalGroceryStore className='footer-contents-icon' />
          <p className='footer-contents-p'>Explore</p>
        </div>
        <div>
          <CgProfile className='footer-contents-icon' />
          <p className='footer-contents-p'>Profile</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
