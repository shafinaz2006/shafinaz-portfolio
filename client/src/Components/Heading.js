
const Heading = ({heading}) =>{
  return(
    <div>
      <h2 className='section__heading'>{heading}</h2>
      <div className='section__heading--border'></div>
    </div>
  )
};

export default Heading;