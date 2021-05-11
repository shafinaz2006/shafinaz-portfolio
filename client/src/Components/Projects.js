import React from 'react';
import './Main.scss';
import openhouse1 from '../Assets/images/openhouse5.PNG';
import openhouse2 from '../Assets/images/openhouse6.PNG';
import openhouse3 from '../Assets/images/openhouse7.PNG';
import openhouse4 from '../Assets/images/openhouse8.PNG';
import webPage3 from '../Assets/images/webPage3.PNG';
import webPage4 from '../Assets/images/webPage4.PNG';
import takeABreak from '../Assets/images/takeABreak.PNG';
import takeABreak2 from '../Assets/images/takeABreak2.PNG';

function Projects() {
    return (
        <section className='section projects' id='projects'>
            <h2 className='section__heading'>Recent Projects</h2>
            <div className='projects__project'>
                <div className='projects__project-desc'>
                    <h3 className='section__subHeading'> OPEN HOUSE </h3>
                    <p className='info__text'>
                        OPEN HOUSE is a platform for home buyers, sellers and professionals related to the real estate industry.
                    </p>
                    <a className='projects__gitLink button button--projects' href= 'https://github.com/shafinaz2006/shafinaz-open-house-app' target='_blank' rel="noreferrer">View code</a>
                </div>
                <div className='projects__project-pics'>
                    <img className='projects__pic' src={openhouse1} alt='profile pic' />
                    <img className='projects__pic projects__pic--mobile' src={openhouse2} alt='profile pic' />
                </div>
                <div className='projects__project-pics'>
                    <img className='projects__pic projects__pic--mobile' src={openhouse3} alt='profile pic' />
                    <img className='projects__pic ' src={openhouse4} alt='profile pic' />
                </div>
            </div>
            <div className='projects__project'>
                <div className='projects__project-desc'>
                    <h3 className='section__subHeading'> Take a break </h3>
                    <p className='info__text'>
                        A responsive application to choose favourite books from New York Times bestsellers' API and movies from IMDB API. 
                    </p>
                    <a className='projects__gitLink button button--projects' href= 'https://shafinaz2006.github.io/Take-a-Break/#/' target='_blank' rel="noreferrer">View the application</a>
                </div>
                <div className='projects__project-pics'>
                    <img className='projects__pic projects__pic--2 projects__pic--mobile' src={takeABreak} alt='profile pic' />
                    {/* <img className='projects__pic projects__pic--2 projects__pic--mobile' src={takeABreak3} alt='profile pic' /> */}
                    <img className='projects__pic projects__pic--2 ' src={takeABreak2} alt='profile pic' />
                </div>
            </div>
            <div className='projects__project'>
                <div className='projects__project-desc'>
                    <h3 className='section__subHeading'> Professional Webpage </h3>
                    <p className='info__text'>
                        Responsive professional webpage for client. 
                    </p>
                    <a className='projects__gitLink button button--projects' href= 'https://faculty.tru.ca/jtomal/' target='_blank' rel="noreferrer">View Webpage</a>
                </div>
                <div className='projects__project-pics'>
                    <img className='projects__pic projects__pic--mobile' src={webPage3} alt='profile pic' />
                    <img className='projects__pic ' src={webPage4} alt='profile pic' />
                </div>
            </div>
        </section>
    );
}
export default Projects;