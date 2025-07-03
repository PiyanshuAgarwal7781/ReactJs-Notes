import React from 'react'
import Header from "./Header"
import Footer from "./Footer"
import { Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <div>

      <Header></Header>
      <div id="placeholder" style={{minHeight:"100vh"}} >
        <Outlet></Outlet>
      </div>

      <Footer></Footer>
    </div>
  )
}

export default RootLayout
