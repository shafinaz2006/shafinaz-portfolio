import React from 'react';
import './Main.scss';
import profilePic from '../Assets/images/profile2.jpg';

function Home(){
    return(
        <section className='section intro'>
            <h2 className='section__heading'>Hello!!</h2>
            <p className='section__text'> I am </p>
            <h3 className='intro__name'> Shafinaz Shafique</h3>
            <h3 className='intro__title'>Full Stack Web Developer</h3>
            <div className='info'>
                <div className='info__picDiv'>
                    <img className='info__pic' src={profilePic} alt='profile pic'/>
                </div>
                <div className='info__right'>
                    <p className='info__text'>
                        I worked as a Quality Assurance Analyst for more than two years in Toronto, Ontario. During this time, I collaborated with developers and grew interest to pursue my career as a Web Developer.
                    </p>
                    <p className='info__text'>
                        I like new challenges and get super excited when I solve a problem.
                    </p>
                    <p className='info__text'>
                        Over the years, I learned that perseverance is a great element for success. Now my motto is, while working on a problem, if one approach doesn't work, that means I have another ninety-nine to try!!!
                    </p>
                </div>
            </div>
        </section>
    )
}
export default Home;