import React from 'react';
import '../Styles/Main.scss';
import Heading from '../Components/Heading';
import EducationItem from '../Components/EducationItem';
import {educationData} from '../Utils/data';

function Education(){
  return(
    <section className='section education' id='education'>
      <Heading heading='Education' />
      <ul className='education__list'>
        {educationData.map(education => <EducationItem key={education.id} education={education} />)}
      </ul>
    </section>
  );
}
export default Education;
