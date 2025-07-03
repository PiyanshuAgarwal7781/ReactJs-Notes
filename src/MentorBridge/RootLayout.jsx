import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

export default function RootLayout() {
  return (
    <div>
      <Header></Header>
      <div style={{minHeight:"100vh"}}>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  )
}
