import { useState } from "react";
import { NavLink } from "react-router-dom";
import { RiCloseLine } from 'react-icons/ri'

import { logo } from "../assets";
import { links } from "../assets/constants";
import { HiOutlineMenu } from "react-icons/hi";
import Logo from "./Logo";

const NavLinks = ({ handleClick }) => {

  return (
    <div className="mt-10 md:w-full  max-w-[200px] mx-auto">
      {links.map(item => (
        <NavLink key={item.name} to={item.to} onClick={() => handleClick && handleClick()} className={({ isActive }) => (`flex items-center my-8 text-xl font-medium
        ${isActive ? "text-[#7971E9]" : "text-[#69757c]"}`)} >
          <item.icon className="w-6 h-6 mr-2" />
          {item.name}
        </NavLink>
      ))}
    </div>
  )
}

const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <>
      <div className={`py-10 px-4 w-[240px] flex-col md:flex hidden bg-[#1d2d36]`}>
        {/* <img src={logo} alt='logo' className="md:w-full h-20 object-contain"></img> */}
        <Logo />
        <NavLinks />
      </div>
      <div className="md:hidden flex-1 flex justify-between p-[10px] bg-[#1d2d36] z-30 items-center">

        <Logo />
        {mobileMenuOpen ?
          <RiCloseLine className="w-6 h-6 text-white mr-2" onClick={() => setMobileMenuOpen(false)} /> :
          <HiOutlineMenu className="w-6 h-6 text-white mr-2" onClick={() => setMobileMenuOpen(true)} />
        }
      </div>
      <div className={`absolute z-20 top-10 h-screen w-full md:hidden smooth-transition p-6 bg-[#1d2d36] ${mobileMenuOpen ? 'left-0' : '-left-full'}`}>
        <NavLinks className='justify-center' handleClick={() => setMobileMenuOpen(false)} />
      </div>
    </>
  )
}

export default Sidebar;
