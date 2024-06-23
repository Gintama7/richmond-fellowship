import React from 'react'
import FirstPage from './FirstPage'
import Facilities from './Facilities'
import SuccessStories from './SuccessStories'
import Testimonials from './Testimonials'
import Feedback from './Feedback';

const MainBody = () => {
  return (
    <div className='col-md-12 justify-md-center px-4'>
      <FirstPage/>
      <Facilities/>
      <SuccessStories/>
      <Testimonials/>
      <Feedback/>
    </div>
  )
}

export default MainBody
