import React from 'react'
import DeptNavbar from '../components/DeptNavbar'
import Footer from '../components/Footer'

const layout = ({ children }) => {
  return (
    <>
      <body className="">
        <DeptNavbar />
        {children}
        <Footer />
      </body>
    </>
  )
}

export default layout
