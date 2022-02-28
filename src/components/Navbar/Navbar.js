import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

function Navbar() {
  const Menu = () => (
    <>
      <p>
        <a href='#top' key='top'>
          Top
        </a>
      </p>
      <p>
        <a href='#about' key='about'>
          About Me
        </a>
      </p>
      <p>
        <a href='#projects' key='projects'>
          Projects
        </a>
      </p>
      <p>
        <a href='#contact' key='contact'>
          Contact Me
        </a>
      </p>
    </>
  );

  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <>
      <div className='navbar'>
        <div className='navbar-links'>
          <div className='navbar-links_container'>
            <Menu />
          </div>
        </div>
        <div className='navbar-hamburger'>
          {toggleMenu ? (
            <RiCloseLine
              color='#fff'
              size={27}
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <RiMenu3Line
              color='fff'
              size={27}
              onClick={() => setToggleMenu(true)}
            />
          )}

          {toggleMenu && (
            <div className='navbar-hamburger_container shadow-pop-tr'>
              <div className='navbar-hamburger_container-links '>
                <Menu />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;
