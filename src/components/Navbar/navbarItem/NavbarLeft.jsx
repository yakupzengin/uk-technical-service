import React from 'react'
import { Link } from 'react-router-dom'
import "./navbarLeft.css";
import logo from "../../../images/newLogo-ÜçKardeşlerTS.jpg"

const NavbarLeft = () => {
  return (
    <div className="navbar-left">
      <Link to="/" className='link'>
        <img src={logo} className="logo" alt="" />
      </Link>
      {/* <Link to="/" className='link'>
        Üç Kardeşler Teknik Servis
      </Link> */}
    </div>
  )
}
export default NavbarLeft