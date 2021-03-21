import React from 'react';
import { useForm } from 'react-hook-form';




const ContactForm = () => {
  const {register, errors, handleSubmit, reset} = useForm(); 

  const onSubmit = async(data) => {
    console.log('Name: ', data.name);
    console.log('Email: ', data.email);
    console.log('Subject: ', data.subject);
    console.log('Message: ', data.message);
  }

  return (
    <div className="contactForm">
        <div className="contactForm__container u-margin-top-3">
          <form  className="contactForm__form" onSubmit={handleSubmit(onSubmit)} noValidate>
            <input
              type='text'
              name='name'
              ref={register({
                require: {value:true, message: 'Please enter your name'},
                maxLength: {
                  value: 30,
                  message: 'Please use 30 characters or less'
                }
              })}
              className='contactForm__control formInput'
              placeholder='Name'
            ></input>
            {errors.name && <span className="errorMessage">{errors.name.message}</span>}
            <input
              type='email'
              name='email'
              ref={register({
                pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
              })}
              className='contactForm__control formInput'
              placeholder='Email address'
            ></input>
            {errors.email && (
              <span className="errorMessage">Please enter a valid email address</span>
            )}
            <input
              type='text'
              name='subject'
              ref={register({
                require: {value:true, message: 'Please enter a subject'},
                maxLength: {
                  value: 75,
                  message: 'Subject cannot exceed 75 characters'
                }
              })}
              className='contactForm__control contactForm__control--sbj formInput'
              placeholder='Subject'
            ></input>
            {errors.subject && (
              <span className="errorMessage">{errors.subject.message}</span>
            )}
            <textarea
              name='message'
              ref={register({
                required: true
              })}
              className='contactForm__control contactForm__control--msg formInput'
              placeholder='Message'
            ></textarea>
            {errors.message && <span className="errorMessage">Please enter a message</span>}
            <button className="contactForm__submitBtn" type='submit'>
              Submit
            </button>
          </form>
        </div>
    </div>
  );
};

export default ContactForm;
              

