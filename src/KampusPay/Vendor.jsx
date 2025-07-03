import React from 'react'
import "./Vendor.css"
import { SlPrinter } from "react-icons/sl";
import { GiPartyFlags } from "react-icons/gi";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { BsBook } from "react-icons/bs";
import { IoFastFoodOutline } from "react-icons/io5";
import { IoTicketOutline } from "react-icons/io5";

export default function Vendor({index}) {
  let arr=["Canteen","Stationery","Events","HallTicket","Libary","others"];
  let arrimg=[<IoFastFoodOutline/>,<SlPrinter></SlPrinter>,<GiPartyFlags></GiPartyFlags>,<IoTicketOutline></IoTicketOutline>,<LiaUserFriendsSolid></LiaUserFriendsSolid>,<BsBook></BsBook>]
  return (
    <div id="upparvendormain" >
      <div id="vendormain">
        <span>
        <p>{arr[index]}</p>
        <p>{arrimg[index]}</p>
        </span>
      </div>
    </div>
  )
}
