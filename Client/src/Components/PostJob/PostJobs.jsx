import React from 'react';
import './postJobs.css';
import { FaGreaterThan } from 'react-icons/fa';

function PostJobs() {
  return (
    <div className='post-jobs-container'>
      <div className='post-jobs-content'>
        <p className='post-jobs-content-p'>Suggested Candidates</p>
        <button className='post-jobs-content-btn'>
          <div calssName='post-jobs-content-btn-content'>Post a Job</div>
          <FaGreaterThan className='post-jobs-content-btn-icon' />
        </button>
      </div>
    </div>
  );
}

export default PostJobs;
