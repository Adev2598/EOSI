import React, { Suspense } from 'react'
import {ContactForm} from '../components'
import {Newsletter} from '../components'
// const ContactForm = React.lazy(() => import('../components'));
// const Newsletter = React.lazy(() => import('../components'));
// const ErrorBoundary = React.lazy(() => import('../components'));

const ContactUs = () => {
  return (
    <>
        <div className='dark:bg-slate-800'>

        {/* <div className='pb-32 text-center'>
            <h1 className='dark:text-white text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'> Get the inside track on <br/>what's happening at EOSI</h1>
        </div> */}
        <Newsletter/>
        

        <div id="contactus" className='pb-32 text-center mt-48'>
            <h1 className='dark:text-white text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'> We're here to help</h1>
        </div>
        
        <ContactForm/>

        </div>
    </>
  )
}

export default ContactUs