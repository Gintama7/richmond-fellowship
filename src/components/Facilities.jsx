import React from 'react';
import './Facilities.css';
import facilities1 from '/facilities1.jpg';
import facilities2 from '/facilities2.jpg';
import facilities3 from '/facilities3.jpg';

const Facilities = () => {
  return (
    <div className="facilities-container">
      <div className="facilities-top d-flex flex-md-column flex-lg-row gap-4">
        <div className="halfway-home">
          <img src={facilities1} alt="" />
          <div className="halfway-home-text">
            <p className="fs-4">
              <b className="text-warning">ASHA</b> Halfway Home
            </p>
            <p>
              The therapeutic programme at ASHA is designed to let residents
              develop a sense of responsibility and accountability, covering
              individual, and family therapy, group activities and vocational
              training.
            </p>
          </div>
        </div>
        <div className="support">
          <button>Find Support</button>
          <p className="text-light mt-4">
            If you or someone you know are struggling with a mental health
            crisis, you are not alone.
          </p>

          <div className="float-end">
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
      <div className="facilities-bottom d-flex gap-4">
    <div className="long-stay">
        <div className='long-stay-top'>
        <p className='fs-4'>

        <b className='text-warning'>JYOTHI</b> Long Stay Home
        </p>
        <p>Exclusively for those completing short stay rehabilitation at Asha, JYOTHI extends care with family involvement.</p>
   </div>
    <div className="talk-to-us">
        <p className='mt-3 fw-700'>Talk to us</p>
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
    <div>
        <img src={facilities2} alt="person looking" height="340px"/>
    </div>
    <div className='day-care'>
    <p className='fs-4'><b className='text-info fw-bold'>CHETANA</b> Day Care Centre</p>
    <p>Geared towards self-reliance, CHETANA provides vocational training, operating from 9.30 a.m. to 4.00 p.m., emphasising on practical life skills and rehabilitation.</p>
    </div>
    <div className="train-with-us">
        <img src={facilities3} alt="train with us" />
        <div className='train-btn'>
        <p className='mt-3 fw-700'>Train with us</p>
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
  );
}

export default Facilities
