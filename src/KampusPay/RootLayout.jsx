import React from 'react'
import { Outlet } from 'react-router-dom';
import LoaderPage from './LoaderPage';

export default function RootLayout() {
  return (
    <div>
      <div id="layout">
      <Outlet></Outlet>
      </div>
    </div>
  )
}
