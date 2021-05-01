import React from 'react';
import './Main.scss';
import graduationPic from '../Assets/images/graduation.jpg';
import schoolIcon from '../Assets/icons/school_white.svg';

function Education(){
    let educationItem = [{
        title:'BrainStation',
        desc: 'Diploma in Web Development',
        date: 'Jan 2021 – Apr 2021'
    },{
        title:'University of Toronto',
        desc: 'M.Engg, Electrical & Computer Engineering',
        date: 'Jan 2015 – Jun 2016'
    },{
        title:'Bangladesh University of Engineering & Technology',
        desc: 'B.Sc.Engg, Electrical & Electronic Engineering',
        date: 'Apr 2002 – Jun 2007'
    }
]
    return(
        <section className='section education' id='education'>
            <h2 className='section__heading'>Education</h2>
            <div className='info info--reverse'>
                <div className='info__picDiv'>
                    <img className='info__pic' src={graduationPic} alt='graduation pic' />
                </div>
                <ul className='info__right education__list'>
                    {educationItem.map(education => 
                    <li className='education__item' key={education.title}>
                        <img className='education__icon' src={schoolIcon} alt='graduation hat icon' />
                        <div className='education__text'>
                            <p className='education__title'>{education.title}</p>
                            <p className='education__desc'>{education.desc}</p>
                            <p className='education__date'>{education.date}</p>
                        </div>
                    </li>
                    )}
                </ul>
            </div>
        </section>
    );
}
export default Education;
