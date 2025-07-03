import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

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
