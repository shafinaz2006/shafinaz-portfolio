import React from 'react';
import '../Styles/Main.scss';
import profilePic from '../Assets/images/profile2.jpg';
import {infoText} from '../Utils/data';
import Heading from '../Components/Heading';

function Home(){
  return(
    <section className='section intro'>
      <Heading heading='Shafinaz Shafique' />
      <h3 className='intro__title'>Full Stack Web Developer</h3>
      <div className='info'>
        <img className='info__pic' src={profilePic} alt='profile pic'/>
        <div className='info__right'>
          {infoText.map((info, i) => <p key={i} className='info__text'>{info}</p>)}
        </div>
      </div>
    </section>
  )
}
export default Home;