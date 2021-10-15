import Error from './Error';

const Input = ({label, name, handleChange, value, error}) =>{
  return(
    <>
      <label className='input__label' htmlFor={label}>{name}:</label>
      <input type='text' className='input' name={label} placeholder={label} 
             id={`input_${label}`} onChange={handleChange} value={value ||''}/>
      {error && <Error error={error} />}
    </>
  )
}

export default Input;