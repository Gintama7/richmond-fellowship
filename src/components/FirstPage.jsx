import React from 'react'
import { Badge, Button, Container, Stack } from 'react-bootstrap';
import "./FirstPage.css";
import firstImage from '/firstImage.jpg';
import heart from '/heart.jpg';

const FirstPage = () => {
  return (
    <div className="container d-flex flex-md-column flex-lg-row justify-content-center align-items-md-center align-items-lg-start gap-4 mt-4">
      <div className="text-box">
        <Stack direction="horizontal" gap={2}>
          <span className="psych">Psychology</span>
          <span className="rehab">Rehabilitation</span>
          <span className="recover">Recovery</span>
        </Stack>
        <div className="">
          <p>
            <b>Iluminating</b> the Path to
            <b>Mental Wellbeing</b>
          </p>
          <span>
            The Richmond Fellowship Society (India) Bangalore offers
            compassionate care and rehabilitation for those with severe mental
            health challenges on their journey to wellness.
          </span>
          <div className="d-flex align-items-center gap-4 mt-4">
            <button className="talkto">Talk to Us</button>
            <svg
              width="43"
              height="43"
              viewBox="0 0 43 43"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="21.3019" cy="21.6239" r="20.75" fill="#E22313" />
              <path
                d="M2.06602 0.471177C1.4003 0.0475332 0.529144 0.525747 0.529144 1.31484V10.876C0.529144 11.6651 1.40029 12.1433 2.06602 11.7197L9.57839 6.9391C10.1959 6.54614 10.1959 5.64473 9.57839 5.25178L2.06602 0.471177Z"
                fill="white"
                transform="translate(16, 15.5)"
              />
            </svg>
            <span>CEO’s Message</span>
          </div>
        </div>
      </div>
      <div className="image-text">
        <img src={firstImage} alt="Old man proud" />
        <div className="image-toptext">
          <div>
            <h3 className="text-danger">5.1K</h3>
            <p className="fw-bold">Sudent orientations</p>
          </div>
          <div>
            <h3 className="text-secondary">723</h3>
            <p className="fw-bold">Student Internships & Block Placements</p>
          </div>
          <div>
            <h3 className="text-warning">452</h3>
            <p className="fw-bold">Short-term training</p>
          </div>
          <div className="border-0">
            <h3 className="text-info">80</h3>
            <p className="fw-bold">Post Graduates</p>
          </div>
        </div>
        <div className="image-bottom">
          <img src={heart} alt="heartImage" />
          <p className="fs-5 fs-md-6 mt-2">
            Over <b>1.26K</b> Patients Rehabilitated
          </p>
        </div>
      </div>
    </div>
  );
}

export default FirstPage
