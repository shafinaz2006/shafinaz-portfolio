import { useState, useEffect } from 'react';
import {baseURL} from '../Utils/API_data';
import axios from 'axios';
const useContactForm = (validate) => {
    const [values, setValues] = useState({});
    const [newMessage, setNewMessage] = useState({});
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isMessageSent, setIsMessageSent] = useState(false);

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
            function sendMessage(newMessage) {
                axios.post(`${baseURL}/contact`, newMessage)
                    .then(response => {
                        console.log('message sent status: ', response.status);
                    })
                    .catch(error => console.log(error));
            }
            sendMessage(newMessage);
            setValues({})
            setIsMessageSent(true);
        }
    }, [newMessage, errors, isSubmitting]);

    // handle form submit:

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validate) setErrors(validate(values));
        setIsSubmitting(true);
    };

    // handle input change:

    const handleChange = (event) => {
        event.persist();
        setValues(values => ({ ...values, [event.target.name]: event.target.value }));
        setNewMessage({...values});
    };

    return { handleChange, handleSubmit, values, errors, isMessageSent }
};

export default useContactForm;
