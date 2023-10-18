import React from 'react'
import Element14Color from '../assets/eosi-elements/14.png'
import studentFull from '../assets/images/studentFull.png'
import '../Styles/animations.css'

const Hero = () => {

  return (
    <>
    <div className="bg-white dark:bg-slate-800">
      
      <div className='grid lg:grid-cols-2 sm:grid-cols-1 lg:px-24'>

      <div className="relative isolate px-6 pt-14 lg:px-8 ">
        <div className="mx-auto max-w-2xl py-32 sm:py-8 lg:pt-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="dark:text-white relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 dark:ring-white ring-gray-900/10 dark:hover:ring-[#0a6aab] hover:ring-[#004169]/20">
              Register for EOSI {' '}
              <a href="#" className="font-semibold text-[#0a6aab]">
                <span className="absolute inset-0" aria-hidden="true" />
                here <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="dark:text-white text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              unlock your energy potential
            </h1>
           <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-[#0a6aab] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#004169] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
            </div>
          </div>
        </div>
      </div>
        <div>
          <img src={studentFull} alt="student" className='lg:mt-32 sm:my-auto bounce-in'/>
        </div>  
        <div
        className="top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden mt-"
        style={{ height: "80px" }}
      >
        <svg
          className="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            className="text-gray-300 fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>    
        </div>
        
        
      <div>        
      </div>
      
    </div> 
   
    </>
  )
}

export default Hero