export default function validate(values) {
    let errors = {};
    if (!values.name)  errors.name = 'Name is required';
    if (!values.email) errors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(values.email)) errors.email = 'Email address is invalid';
    if (!values.message) errors.message = 'Message is required';
    //console.log('errors from validation rules', errors);
    return errors;
};