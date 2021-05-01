import React from 'react';
import './Main.scss';
import openhouse1 from '../Assets/images/openhouse1.PNG';
import openhouse2 from '../Assets/images/openhouse2.PNG';
import openhouse3 from '../Assets/images/openhouse3.PNG';
import openhouse4 from '../Assets/images/openhouse4.PNG';
import project21 from '../Assets/images/lifeAfterBrainStation1.PNG';
import project22 from '../Assets/images/lifeAfterBrainStation2.PNG';
import project23 from '../Assets/images/lifeAfterBrainStation3.png';
import webPage1 from '../Assets/images/webPage1.PNG';
import webPage2 from '../Assets/images/webPage2.PNG';

function Projects() {
    return (
        <section className='section projects' id='projects'>
            <h2 className='section__heading'>Recent Projects</h2>
            <div className='projects__project'>
                <div className='projects__project-desc'>
                    <h3 className='section__subHeading'> OPEN HOUSE </h3>
                    <p className='info__text'>
                        OPEN HOUSE is a platform for home buyers, sellers and professionals related with housing business.
                    </p>
                    <a className='projects__gitLink button button--projects' href= 'https://github.com/shafinaz2006/shafinaz-open-house-app' target='_blank' rel="noreferrer">View code</a>
                </div>
                <div className='projects__project-pics'>
                    <img className='projects__pic' src={openhouse1} alt='profile pic' />
                    <img className='projects__pic' src={openhouse2} alt='profile pic' />
                </div>
                <div className='projects__project-pics'>
                    <img className='projects__pic' src={openhouse3} alt='profile pic' />
                    <img className='projects__pic' src={openhouse4} alt='profile pic' />
                </div>
            </div>
            <div className='projects__project'>
                <div className='projects__project-desc'>
                    <h3 className='section__subHeading'> Life After BrainStation </h3>
                    <p className='info__text'>
                        An application to choose favorite books from NY Times bestsellers API and movies from IMDB API. 
                    </p>
                    <a className='projects__gitLink button button--projects' href= 'https://shafinaz2006.github.io/Life-after-BrainStation/#/' target='_blank' rel="noreferrer">View the application</a>
                </div>
                <div className='projects__project-pics'>
                    <img className='projects__pic projects__pic--2' src={project21} alt='profile pic' />
                    <img className='projects__pic projects__pic--2' src={project22} alt='profile pic' />
                    <img className='projects__pic projects__pic--2' src={project23} alt='profile pic' />
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
                    <img className='projects__pic ' src={webPage2} alt='profile pic' />
                    <img className='projects__pic' src={webPage1} alt='profile pic' />
                </div>
            </div>
        </section>
    );
}
export default Projects;