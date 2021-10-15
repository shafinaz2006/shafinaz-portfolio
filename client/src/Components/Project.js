import '../Styles/Main.scss';

const Project = ({project}) => {
  return(
    <div className='project'>
      <h3 className='section__subHeading'> {project.title} </h3>
      <p className='project__desc'>{project.description}  </p>
      <a className='project__gitLink button button--projects' href={project.codeLink} target='_blank' rel="noreferrer">{project.linkName}</a>
      <div className='project__imgGroup'>
        {project.img.map((img, i) => <img key={i} className='project__pic' src={img} alt='project pic' />)}
      </div>
    </div>
  );
}

export default Project;