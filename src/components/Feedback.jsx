import React from 'react';
import './Feedback.css';
import feedback1 from '/feedback1.jpg';
import feedback2 from '/feedback2.jpg';
import feedback3 from '/feedback3.jpg';

const Feedback = () => {
  return (
    <div className='feedback-container'>
        <h4>FEEDBACK</h4>
        <div className='second-container'>
        <div className='img-container'>
            <img src={feedback1} alt="feedback1" />
            <div className='img-text'>
            Unlocking Mental Health Insights
            </div>
            </div> 
            <div className='img-container'>
            <img src={feedback2} alt="feedback2" />
            <div className='img-text'>
            Beyond Expectations: Block Placement at RFS
            </div>
            </div> 
            <div className='img-container'>
            <img src={feedback3} alt="feedback3" />
            <div className='img-text'>
            Guiding Light in Fieldwork
            </div>
            </div> 
      </div>
      <p className='final-quote'>In unison, these facilities embody RFS Bangalore's commitment to empowering individuals, facilitating successful reintegration into society.</p>
    </div>
  )
}

export default Feedback
