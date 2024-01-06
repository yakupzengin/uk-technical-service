import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FcServices } from 'react-icons/fc';
import { MdLocationOn } from 'react-icons/md';
import { FcContacts } from 'react-icons/fc';
import { FcAbout } from 'react-icons/fc';
import { FcHome } from 'react-icons/fc';
import { AiOutlineClose } from 'react-icons/ai'; 
import { NavLink } from 'react-router-dom'; 
import './navbarRight.css';

const NavbarRight = ({ isMobileMenuOpen, toggleMobileMenu }) => {
  const navigate = useNavigate();

  return (
    <div className='navbar-right'>
      {isMobileMenuOpen && (
        <div className='header'>
          <h1>Üç Kardeşler Teknik Servis</h1>
          <AiOutlineClose className='header-icon' onClick={toggleMobileMenu} />
        </div>
      )}
      {/* Use NavLink instead of div */}
      <NavLink to='/' className='nav-item' onClick={() => navigate('/')}>
        <FcHome size={25} className='icon' />
        <div className='nav-text'>Anasayfa</div>
      </NavLink>
      <NavLink to='/hakkımızda' className='nav-item' onClick={() => navigate('/hakkımızda')}>
        <FcAbout size={25} className='icon' />
        <div className='nav-text'>Hakkımızda</div>
      </NavLink>
      <NavLink to='/servislerimiz' className='nav-item' onClick={() => navigate('/servislerimiz')}>
        <FcServices size={25} className='icon' />
        <div className='nav-text'>Servisler</div>
      </NavLink>
      <NavLink to='/iletişim' className='nav-item' onClick={() => navigate('/iletişim')}>
        <FcContacts size={25} className='icon' />
        <div className='nav-text'>İletişim</div>
      </NavLink>
      <NavLink to='/konum' className='nav-item' onClick={() => navigate('/konum')}>
        <MdLocationOn size={25} className='icon' />
        <div className='nav-text'>Konum</div>
      </NavLink>
    </div>
  );
};

export default NavbarRight;
