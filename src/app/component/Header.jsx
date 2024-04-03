"use client"
import React from 'react'
import { BsFillSendFill } from "react-icons/bs";
import { GrWifiMedium } from "react-icons/gr";
import { GiNetworkBars } from "react-icons/gi";
import { FaBatteryThreeQuarters } from "react-icons/fa";

function Header() {
  return (
    <section className='flex justify-between items-center mb-[40px]'>
      <div className="left-section flex items-center gap-3">
        <h3 className='text-[20px]'>1:11</h3>
        <BsFillSendFill size={20} />
      </div>
      <div className="right-section flex items-center gap-3">
        <GrWifiMedium size={26} />
        <GiNetworkBars size={20} />
        <FaBatteryThreeQuarters size={30} />
      </div>
    </section>
  )
}

export default Header
