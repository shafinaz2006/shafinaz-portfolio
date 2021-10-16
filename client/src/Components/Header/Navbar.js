import React, {useState} from 'react';
import menu_icon from '../../Assets/icons/menu_white.svg';
import resume from '../../Assets/Shafinaz_Shafique_Resume.pdf';

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const displayMenu = () =>{mobileMenu? setMobileMenu(false): setMobileMenu(true);}
  const handleMenuClick = () =>{ if(mobileMenu) setMobileMenu(false); }

  return (
    <nav className='nav'>
      <div className='nav__titleDiv'>
        <a className='nav__title' href='./index.html'> Shafinaz </a>
        <img className='nav__menu' src={menu_icon} alt='menu' onClick={displayMenu} />
      </div>
      <div className={`${mobileMenu? 'nav__mobile': 'nav__tablet'}`}>
        <a className='nav__link' onClick={handleMenuClick} href='/#projects'> Projects </a>
        <a className='nav__link' onClick={handleMenuClick} href='/#education'> Education </a>
        <a className='nav__link' onClick={handleMenuClick} href={resume} target='_blank' rel="noreferrer"> Resume </a>
        <a className='nav__link' onClick={handleMenuClick} href='/#contact'> Contact</a>
      </div>
    </nav>
  )
}

export default Navbar;