import useContactForm from '../hooks/useContactForm';
import validate from '../hooks/contactFormValidationRules';
import Input from './Input';

const ContactForm = () => {
  const { values, handleChange, handleSubmit, errors, isMessageSent } = useContactForm(validate);
  return (
    <form className='contact__form' onSubmit={handleSubmit}>
      {isMessageSent &&  
        <p className='contact__message'>
          Your message is received. I'll get back to you soon!!!
        </p>
      }
      <Input label='name' name='Name' value={values.name} handleChange={handleChange} error={errors.name} />
      <Input label='email' value={values.email} name='Email' handleChange={handleChange} error={errors.email}/>
      <Input label='message' value={values.message} name='Message' handleChange={handleChange} error={errors.message} />
      <input type='submit' className='button button--right' value='Submit'/>
    </form>
  )
}
export default ContactForm;