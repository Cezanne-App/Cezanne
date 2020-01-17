import React from 'react';

const Navbar = ({user} = 'User') => {
  return (
    <>
      <header className='nav-bar'>
        <img className='logo' src='./images/cezanne_logo.png' alt='logo'/>
        <span className='nav-title'>Cezanne</span>
        <nav className='nav-menu'>
          <ul className='nav-links'>
            <li><a href='#'>Artists</a></li>
            <li><a href='#'>Discover</a></li>
            <li><a href='#'>User</a></li>
          </ul>
        </nav>
        <a className='cta' href='#'><button>Publish your work!</button></a>
      </header>
    </>
  );
};

export default Navbar;