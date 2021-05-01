import React from 'react';
import './Footer.scss';
import linkedIn from '../../Assets/icons/linkedin.svg';
import github from '../../Assets/icons/github.svg';

function Footer(){
    return(
        <footer className='footer'>
           <h2 className='footer__heading'>Connect</h2>
            <div className='footer__iconDiv'>
                <a className='link' href='https://www.linkedin.com/in/shafinaz-shafique/' target='_blank' rel='noreferrer'>
                    <img className='footer__icon' src={linkedIn} alt='linkedIn icon'/>
                </a>
                <a className='link' href='https://github.com/shafinaz2006' target='_blank' rel='noreferrer'>
                    <img className='footer__icon' src={github} alt= 'github icon'/>
                </a>
            </div>
            <p className='footer__text'>Shafinaz Shafique<span className='footer__copyright'> &copy;</span></p>
            <p className='footer__text'> For any query, contact at shafinaz2006@gmail.com </p>
        </footer>
    )
}
export default Footer;