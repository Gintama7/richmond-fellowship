import React from 'react';
import Group2 from "/Group2.png";
import './Footer.css';
import { Nav } from 'react-bootstrap';
import fb from '/fb.png';
import insta from '/insta.png';
import linkedin from '/linkedin.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-top'>
        <div className='footer-image'>
            <img src={Group2} alt="logo2" className='logo-img' />
       </div>
       <div className='d-flex align-items-start col-md-7'>
        <div className='col-md-2'>
        <Nav className="flex-column" >
          <Nav.Link href="#">About</Nav.Link>
          <Nav.Link href="#">Facilites</Nav.Link>
          <Nav.Link href="#">Training</Nav.Link>
          </Nav></div>
          <div className='col-md-2'>
          <Nav className="flex-column" >
          <Nav.Link href="#">Events</Nav.Link>
          <Nav.Link href="#">Privacy Policy</Nav.Link>
          <Nav.Link href="#">Connect</Nav.Link>          
        </Nav>
        </div>
        <div className='col-md-4'>
          <Nav className="flex-column" >
          <Nav.Link href="#">Facilities</Nav.Link>
          <Nav.Link href="#"><span className='text-danger fw-bold'>ASHA</span> Halfway Home</Nav.Link>
          <Nav.Link href="#"><span className='text-warning fw-bold'>JYOTHI</span> Long Stay Home</Nav.Link>
          <Nav.Link href="#"><span className='text-secondary fw-bold'>CHETANA</span> Day Care Center</Nav.Link>              
        </Nav>
        </div>

        <div className='col-md-4 d-flex-column gap-2'>
            <u className='underline'>Call Us: +91 8026645583</u>
            <div className='d-flex gap-2 mt-2'>
            <img src={fb} alt="fb" />
            <img src={insta} alt="insta" />
            <img src={linkedin} alt="linkedin" />
            </div>
            </div>   
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 RFS(I) BANGALORE. All Rights Reserved  |  Website By Miti Design Lab</p>
      </div>
    </div>
  )
}

export default Footer
