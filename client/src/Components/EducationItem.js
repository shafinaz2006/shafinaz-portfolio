import schoolIcon from '../Assets/icons/school_black.svg';

const EducationItem = ({ education }) =>{
  return(
    <li className='education__item' key={education.title}>
      <img className='education__icon' src={schoolIcon} alt='graduation hat icon' />
      <div>
        <p className='education__title'>{education.title}</p>
        <p className='education__desc'>{education.desc}</p>
        <p className='education__date'>{education.date}</p>
      </div>
    </li>
  );
}

export default EducationItem;