import React from 'react';
import ContactForm from '../Components/ContactForm';
import Heading from '../Components/Heading';
import '../Styles/Main.scss';

function Contact(){
  return(
    <section className='section contact' id='contact'>
      <Heading heading='Contact' />
      <p className='section__text contact__text'>Send me a message if you have any questions or interested in my projects.</p>
      <ContactForm />
    </section>
  );
}
export default Contact;