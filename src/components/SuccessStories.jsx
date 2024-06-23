import React from 'react';
import success1 from '/success1.jpg';
import success2 from '/success2.jpg';
import success3 from '/success3.jpg';
import './SuccessStories.css';

const SuccessStories = () => {
  return (
    <div className='success-container d-flex flex-md-column justify-content-center align-items-center flex-wrap gap-4 p-2'>
      <h4 className='success-text'>SUCCESS STORIES</h4>
      <div className='d-flex flex-wrap gap-4'>
        <img src={success1} alt="regaining independence" />
        <img src={success2} alt="job training" />
      </div>
      <img src={success3} alt="caregiver" className='w-fit'/>
      <div></div>
    </div>
  )
}

export default SuccessStories
