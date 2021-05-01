import React from 'react';
import './Main.scss';
import useContactForm from '../hooks/useContactForm';
import validate from '../hooks/contactFormValidationRules';
import questionPic from '../Assets/images/question.jpg';
import error from '../Assets/icons/error.svg';

function Contact(){
    const { values, handleChange, handleSubmit, errors, isMessageSent } = useContactForm(validate);
    return(
        <section className='section contact' id='contact'>
            <h2 className='section__heading'>Contact</h2>
            <p className='section__text'>Send me a message, if you have any query or interested in my projects.</p>
            {isMessageSent? 
                <p className='contact__message'>Your message is received. I'll get beck to you soon!!!</p>
            : ''}
            <div className='info'>
                <div className='info__picDiv'>
                    <img className='info__pic contact__pic' src={questionPic} alt='question pic'/>
                </div>
                <form className='info__right contact__form' onSubmit={handleSubmit}>
                    <label className='input__label' htmlFor='name'> Name:</label>
                    <input type='text' className='input' name='name' placeholder='name' 
                           id='input__name' onChange={handleChange} value={values.name ||''}/>
                    {errors.name? 
                    <div className='input--errorContainer'>
                        <img src={error} alt='error icon' className='input--error-img'/>
                        <p className='input--error-msg'>{errors.name}</p>
                    </div>
                    : ''}
                    
                    <label className='input__label' htmlFor='email'> Email:</label>
                    <input type='text' className='input' name='email' placeholder='email' 
                           id='input__email' onChange={handleChange} value={values.email || ''}/>
                    {errors.email? 
                    <div className='input--errorContainer'>
                        <img src={error} alt='error icon' className='input--error-img'/>
                        <p className='input--error-msg'>{errors.email}</p>
                    </div>
                    : ''}
                    
                    <label className='input__label' htmlFor='message'> Message:</label>
                    <textarea type='text' className='input input--message' name='message' 
                              id='input__message' placeholder='message' value={values.message || ''} 
                              onChange={handleChange} ></textarea>
                    {errors.message? 
                    <div className='input--errorContainer'>
                        <img src={error} alt='error icon' className='input--error-img'/>
                        <p className='input--error-msg'>{errors.message}</p>
                    </div>
                    : ''}
                    <input type='submit' className='button button--right' value='Submit'/>
                </form>
            </div>
        </section>
    );
}
export default Contact;