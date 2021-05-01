import React from 'react';
import './Footer.scss';
import linkedIn from '../../Assets/icons/linkedin.svg';
import github from '../../Assets/icons/github.svg';

function Footer(){
    return(
        <footer className='footer'>
           <h2 className='footer__heading'>Connect</h2>
            <div className='footer__iconDiv'>
                <img className='footer__icon' src={linkedIn} alt='linkedIn icon'/>
                <img className='footer__icon' src={github} alt= 'github icon'/>
            </div>
            <p className='footer__text'>Copyright &copy;, Shafinaz Shafique.</p>
            <p className='footer__text'> For any query, contact at shafinaz2006@gmail.com </p>
        </footer>
    )
}
export default Footer;