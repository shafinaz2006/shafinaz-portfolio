import React from 'react';
import './Footer.scss';
import linkedIn from '../../Assets/icons/linkedin.svg';
import github from '../../Assets/icons/github.svg';

function Footer(){
  return(
    <footer className='footer'>
      <div className='footer__connect'>
        <p className='footer__heading'>Connect: </p>
        <a className='link footer__icon' href='https://www.linkedin.com/in/shafi-shafique/' target='_blank' rel='noreferrer'>
            <img src={linkedIn} alt='linkedIn icon'/>
        </a>
        <a className='link footer__icon' href='https://github.com/shafinaz2006' target='_blank' rel='noreferrer'>
            <img src={github} alt= 'github icon'/>
        </a>
      </div>
      <p className='footer__text'>
        &copy; Shafinaz Shafique, shafinaz2006@gmail.com.
      </p>
    </footer>
  )
}
export default Footer;