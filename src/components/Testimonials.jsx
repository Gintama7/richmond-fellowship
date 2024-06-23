import React from 'react';
import './Testimonials.css';
import woman1 from '/woman1.jpg';

const Testimonials = () => {
  return (
    <div className='testimonials-container'>
      <h4>TESTIMONIALS</h4>
      <div className='d-flex gap-4'>
            <img src={woman1} alt="woman testimonial" />
            <div className="testimonials-right">
                <div className="transformation">
                <h3><b className='text-warning'>RADHA'S</b> <span className='fw-normal'> Transformation</span></h3>
                <p>Radha's time at ASHA Halfway Home has sparked a remarkable transformation. 
                    Once troubled, she now exudes contentment, thriving at an IT firm with newfound confidence. 
                    We deeply appreciate Team ASHA's role in our daughter's profound change.
                </p>
                </div>
                <div className="d-flex gap-4">
                    <div className='box1'>
                        <p><b>JYOTHI</b> Long Stay Home</p>
                        <svg
              width="44"
              height="45"
              viewBox="0 0 44 45"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="22"
                cy="22.16"
                r="21.44"
                fill="#F2F1E5"
                stroke="black"
                strokeWidth="1.12"
              />
              <path
                d="M7.22333 14.1023L11.0747 10.2509L7.22333 6.39113L8.40901 5.20544L13.4545 10.2509L8.40901 15.2964L7.22333 14.1023Z"
                fill="black"
                transform="translate(15, 12.5)"
              />
            </svg>
                    </div>
                    <div className="box2">
                        <p><b>CHETANA</b> Day Care Centre</p>
                        <svg
              width="44"
              height="45"
              viewBox="0 0 44 45"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="22"
                cy="22.16"
                r="21.44"
                fill="#F2F1E5"
                stroke="black"
                strokeWidth="1.12"
              />
              <path
                d="M7.22333 14.1023L11.0747 10.2509L7.22333 6.39113L8.40901 5.20544L13.4545 10.2509L8.40901 15.2964L7.22333 14.1023Z"
                fill="black"
                transform="translate(15, 12.5)"
              />
            </svg>
                    </div>
                </div>
            </div>
      </div>
    </div>
  )
}

export default Testimonials
