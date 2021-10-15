
import React from 'react';
import './Header.scss';
import Navbar from './Navbar';
import Hero from './Hero';

function Header() {
  return (
    <header className='header'>
      <Navbar />
      <Hero />
    </header>
  )
}
export default Header;