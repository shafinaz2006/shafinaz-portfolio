import errorIcon from '../Assets/icons/report.svg';

const Error = ({error}) =>{
  return(
  <div className='input--errorContainer'>
    <img src={errorIcon} alt='error icon' className='input--error-img'/>
    <p className='input--error-msg'>{error}</p>
  </div>
  );
}

export default Error;