import React from 'react';
import '../Styles/Main.scss';
import Project from '../Components/Project';
import {projectData} from '../Utils/data';
import Heading from '../Components/Heading';

function Projects() {
  return (
    <section className='section projects' id='projects'>
      <Heading heading='Recent Projects' />
      {projectData.map(project => <Project key={project.id} project={project} />)}
    </section>
  );
}
export default Projects;