import React, { Fragment } from 'react'
import { Button } from 'react-bootstrap'
import Header from './Header'
import Footer from './Footer'

const Layout = (props) => {
  return (
    <Fragment>
        <Header/>
        <main>{props.children}</main>
        <Footer/>
    </Fragment>
  )
}

export default Layout
