import React from 'react'
import DeptNavbar from '../components/DeptNavbar'
import Footer from '../components/Footer'
import { AuthProvider } from '../Providers'

const layout = ({ children }) => {
  return (
    <>
      <body className="">
        <DeptNavbar />
        <AuthProvider>{children}</AuthProvider>
        <Footer />
      </body>
    </>
  )
}

export default layout
