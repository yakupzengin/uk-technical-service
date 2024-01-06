import React, { useState, useEffect } from 'react';
import NavbarLeft from './navbarItem/NavbarLeft';
import NavbarRight from './navbarItem/NavbarRight';
import { TiThMenu } from "react-icons/ti";
import { IoIosTimer } from "react-icons/io";

import './navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Sayfa yüklendiğinde mobile menüyü kapat
    const closeMobileMenu = () => {
      if (isMobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('click', closeMobileMenu);

    return () => {
      window.removeEventListener('click', closeMobileMenu);
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = (e) => {
    // Hamburger ikonuna tıklandığında menüyü aç/kapat
    e.stopPropagation(); // NavbarRight içindeki tıklamaların menüyü kapatmasını engelle

    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`navbar ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
      <div className="container">
        <div className="navbar-container">

          <div className="navbar-left">
            <NavbarLeft isMobileMenuOpen={isMobileMenuOpen} toggleMobileMenu={toggleMobileMenu} />
          </div>

          <div className="hamburger-menu">
            <div className="menu-icon" >
              <div className="time-icon">
                <IoIosTimer />
              </div>
              <div className="hamburger-icon" onClick={toggleMobileMenu}>
                <TiThMenu />
              </div>
            </div>
          </div>

          <div className={`navbar-right ${isMobileMenuOpen ? 'open' : ''}`}>
            <NavbarRight isMobileMenuOpen={isMobileMenuOpen} toggleMobileMenu={toggleMobileMenu}/>
          </div>


        </div>
      </div>
    </nav>
  );
};

export default Navbar;