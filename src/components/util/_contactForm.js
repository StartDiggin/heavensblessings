import React from 'react';

const ContactForm = () => {
  return (
    <div className="contactForm">
        <div className="contactForm__container">

        
              <form  >
                {/* Row 1 of form */}
              

                    <input
                      type='text'
                      name='name'
                      className='form-control formInput'
                      placeholder='Name'
                    ></input>

                    <input
                      type='email'
                      name='email'
                      className='form-control formInput'
                      placeholder='Email address'
                    ></input>


                    <input
                      type='text'
                      name='subject'
                      className='form-control formInput'
                      placeholder='Subject'
                    ></input>

                 

                    <textarea
                      rows={3}
                      name='message'
                      className='form-control formInput'
                      placeholder='Message'
                    ></textarea>

                 

                <button className='submit-btn' type='submit'>
                  Submit
                </button>

              </form>
        </div>
    </div>
  );
};

export default ContactForm;