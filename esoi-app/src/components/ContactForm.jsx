import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_ombyzvu', 'template_v66s5mk', form.current, 'UZvJ9sznvA8gP0rvj')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };

  return (
    <>
    <div className=' dark:bg-slate-800 pb-32'>
    <div class="w-full max-w-xl mx-auto">

        <form ref={form} onSubmit={sendEmail} className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-10'>
        <label className='block text-gray-700 text-sm font-bold mb-2'>Name</label>
        <input required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" name="user_name" />

        <label className='block text-gray-700 text-sm font-bold mb-2'>Email</label>
        <input required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" name="user_email" />
        
        <label className='block text-gray-700 text-sm font-bold mb-2'>Message</label>
        <textarea className="shadow appearance-none border rounded w-full py-2 px-3" name="message" />
        
        <div className="flex items-center justify-between">
            <input className="bg-[#0a6aab] hover:bg-[#004169] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" value="Send" />
        </div>
        </form>
        
    </div>
    </div>
    </>   
  )
}

export default ContactForm