
import React, {useState} from 'react';
import './Header.scss';
import resume from '../../Assets/Shafinaz_Resume.pdf';
import menu_white from '../../Assets/icons/menu_white.svg';

function Header() {
    const [mobileMenu, setMobileMenu] = useState(false);
    const displayMenu = () =>{mobileMenu? setMobileMenu(false): setMobileMenu(true);}
    const handleMenuClick = () =>{ if(mobileMenu) setMobileMenu(false); }
    return (
        <header className='header'>
            <nav className='nav'>
                <div className='nav__titleDiv'>
                    <a className='nav__title' href='./index.html'> 
                        <span className='nav__title--s'>s</span>hafinaz 
                    </a>
                    <img src={menu_white} alt='menu' onClick={displayMenu} className='nav__menu'/>
                </div>
                <div className={`${mobileMenu? 'nav__mobile': 'nav__tablet'}`}>
                    <a className='nav__link' onClick={handleMenuClick} href='/#projects'> Projects </a>
                    <a className='nav__link' onClick={handleMenuClick} href='/#education'> Education </a>
                    <a className='nav__link' onClick={handleMenuClick} href={resume} target='_blank' rel="noreferrer"> Resume </a>
                    <a className='nav__link' onClick={handleMenuClick} href='/#contact'> Contact</a>
                </div>
            </nav>
            {/* <section className='hero'>
                <div className='hero__textDiv'>
                    <p className='hero__quote'>The journey of a thousand miles begins with one step.</p>
                    <p className='hero__text'>-Lao Tzu</p>
                </div>
            </section> */}
        </header>
    )
}
export default Header;