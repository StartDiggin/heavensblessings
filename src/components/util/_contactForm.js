import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';




const ContactForm = () => {
  // const {REACT_APP_SERVICE_ID, REACT_APP_USER_ID } = process.env;
  // const service_id = process.env.REACT_APP_SERVICE_ID ;
  const service_id = 'service_osvbjng' ;
  // const template_id = process.env.REACT_APP_TEMPLATE_ID;
  const template_id = 'template_go61whh';
  // const user_id = process.env.REACT_APP_USER_ID;
  const user_id = 'user_CGjFWrOiOxJ1tqJdlpucR';

  const {register, errors, handleSubmit, reset} = useForm(); 

  const toastifySuccess = () => {
    toast('Form sent!', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,  
      draggable: false,
      className: 'submit-feedback success',
      toastId: 'notifyToast'
    });
  };

  const onSubmit = async(data) => {
    // Sent from email 
    try {
      const templateParams = {
        Name: data.name,
        Email: data.email,
        Subject: data.subject,
        Message: data.message
      };

      await emailjs.send (
        service_id,
        template_id,
        templateParams,
        user_id
      
        // process.env.REACT_APP_SERVICE_ID,
        // process.env.REACT_APP_TEMPLATE_ID,
        // templateParams,
        // process.env.REACT_APP_USER_ID
       
        );
     
      reset();
      toastifySuccess();
    } catch(e) {
      console.log(e);
    }
  };

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
          <ToastContainer />
        </div>
    </div>
  );
};

export default ContactForm;
              
