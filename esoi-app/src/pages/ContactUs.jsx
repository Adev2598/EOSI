import React from 'react'
import {ContactForm} from '../components'

const ContactUs = () => {
  return (
    <>
        <div className='dark:bg-slate-800 pb-32 text-center'>
            <h1 className='dark:text-white text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'> We're here to help</h1>
        </div>
        <ContactForm/>
    </>
  )
}

export default ContactUs