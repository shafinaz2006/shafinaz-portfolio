import React from 'react';
import './Main.scss';
import graduationPic from '../Assets/images/graduation.jpg';
import schoolIcon from '../Assets/icons/school_white.svg';

function Education(){
    return(
        <section className='section education' id='education'>
            <h2 className='section__heading'>Education</h2>
            <div className='info info--reverse'>
                <div className='info__picDiv'>
                    <img className='info__pic' src={graduationPic} alt='graduation pic' />
                </div>
                <ul className='info__right education__list'>
                    <li className='education__item'>
                        <img className='education__icon' src={schoolIcon} alt='graduation hat icon' />
                        <div className='education__text'>
                            <p className='education__title'>BrainStation</p>
                            <p className='education__text'>Diploma in Web Development</p>
                            <p className='education__date'>Jan 2021 – Apr 2021</p>
                        </div>
                    </li>
                    <li className='education__item'>
                        <img className='education__icon' src={schoolIcon} alt='graduation hat icon' />
                        <div className='education__text'>
                            <p className='education__title'>University of Toronto</p>
                            <p className='education__text'>
                                M.Engg, Electrical & Computer Engineering
                            </p>
                            <p className='education__date'>Jan 2015 – Jun 2016</p>
                        </div>
                    </li>
                    <li className='education__item'>
                        <img className='education__icon' src={schoolIcon} alt='graduation hat icon' />
                        <div className='education__text'>
                            <p className='education__title'>Bangladesh University of Engineering & Technology</p>
                            <p className='education__text'>
                                B.Sc.Engg, Electrical & Electronic Engineering
                            </p>
                            <p className='education__date'>Apr 2002 – Jun 2007</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
}
export default Education;
