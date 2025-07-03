import React from 'react'
import Vendor from './Vendor'
import "./Vendors.css"

export default function Vendors() {
    
  return (
    <div id="upparvendors" >
        <h2>Select Vendor</h2>
      <div id="mainVendors">
        <Vendor index="0" ></Vendor>
        <Vendor index="1" ></Vendor>
        <Vendor index="2" ></Vendor>
        <Vendor index="3" ></Vendor>
        <Vendor index="4" ></Vendor>
        <Vendor index="5" ></Vendor>
      </div>
    </div>
  )
}
