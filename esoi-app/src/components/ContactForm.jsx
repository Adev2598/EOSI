import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { notification } from 'antd';

const ContactForm = () => {

    const [api, contextHolder] = notification.useNotification();
    const openNotificationContactUs = (type) => {
      api[type]({
        message: 'Thank you for contacting EOSI',
        description:
          "We have received your inquiry and we will be in touch soon.",
      });
    };

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
        {contextHolder}
        <div className=' dark:bg-slate-800 pb-32 '>
        <div className="w-full max-w-xl mx-auto">

            <form ref={form} onSubmit={sendEmail} className='shadow-md rounded px-8 pt-6 pb-8 mb-10 bg-gray-900'>
            
            <label className='hidden  dark:text-white text-gray-700 text-sm font-bold mb-4'>Name</label>
            <input placeholder='Enter your name'required className=" w-full flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 mb-4 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" type="text" name="user_name" />

            <label className=' hidden  dark:text-white text-gray-700 text-sm font-bold mb-4'></label>
            <input placeholder='Enter you email'required className=" w-full flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 mb-4 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" type="email" name="user_email" />
            
            <label className='hidden  dark:text-white text-gray-700 text-sm font-bold mb-4'>Message</label>
            <textarea placeholder='Type your message...'className=" w-full flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 mb-4 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" name="message" />
            
            <div className="flex items-center justify-between">
                <input onClick={() => openNotificationContactUs('info')} className="bg-[#0a6aab] hover:bg-[#004169] hover:cursor-pointer text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" value="Send" />
            </div>
            
            </form>
            
        </div>
        </div>
    </>   
  )
}

export default ContactForm