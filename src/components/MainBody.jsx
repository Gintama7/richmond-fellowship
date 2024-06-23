import React from 'react'
import FirstPage from './FirstPage'
import Facilities from './Facilities'
import SuccessStories from './SuccessStories'

const MainBody = () => {
  return (
    <div className='col-md-12 justify-md-center px-4'>
      <FirstPage/>
      <Facilities/>
      <SuccessStories/>
    </div>
  )
}

export default MainBody
