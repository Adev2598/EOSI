import React from "react";

import '../Styles/animations.css'

import Element14Color from '../assets/eosi-elements/14.png'

const About = () => {

  return (
    <>
          {/*<div className='dark:bg-slate-800'>
              <img src={Element9White} />
        </div>*/}
         <div className=" dark:bg-slate-800 pb-20">
          <div className='mx-auto max-w-2xl py-32 sm:py-48 lg:py-34'>
            <div className="text-center px-4">
              <h1 className="dark:text-white text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                About
                </h1>
              <div className="dark:text-white mt-6 text-lg leading-8 text-gray-600 ">
                The Energy Oman Student Initiative aims to provide a platform for students 
                interested in the energy sector to gain knowledge,
                engage with industry professionals, and contribute to Energy Oman Magazine.
                The program aims to foster learning, networking, and career development opportunities for students.            
              </div>
            </div>
            <img src={Element14Color} className="scale-75 ml-14" alt="student"/>
          </div>

    <div className="container my-0 sm:mx-auto md:px-6" >
       <section className="mb-14">
    <div className="flex flex-wrap items-center dark:text-white text-gray-900 ml-20">
      <div className="mb-6 w-full shrink-0 grow-0 basis-auto px-3 lg:mb-0 lg:w-4/12">
        <h3 className="mb-6 text-3xl font-bold text-">
          Program Components
        </h3>

        <p className="mb-12 text-gray-600 dark:text-neutral-300">
          Nunc tincidunt vulputate elit. Mauris varius purus malesuada neque
          iaculis malesuada. 
        </p>
        
      </div>

      <div className="mb-md-0 mb-6 w-full shrink-0 grow-0 basis-auto px-3 lg:w-8/12">
        
        <div className="flex flex-wrap">
          <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 lg:px-3">
            <div className="flex">
              <div className="mt-0.5 shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                  stroke="currentColor" className="mr-3 h-5 w-5 text-primary dark:text-primary-400">
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="ml-2 grow">
                <p className="mb-3 font-bold text-[#0a6aab] dark:text-[white]">Student Contributor Program</p>
                                                      
              </div>
            </div>
          </div>

          <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 lg:px-3">
            <div className="flex">
              <div className="mt-0.5 shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                  stroke="currentColor" className="mr-3 h-5 w-5 text-primary dark:text-primary-400">
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="ml-2 grow">
                <p className="mb-3 font-bold text-[#0a6aab] dark:text-[white]">Mentorship Program</p>
  
              </div>
            </div>
          </div>

          <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 lg:px-3">
            <div className="flex">
              <div className="mt-0.5 shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                  stroke="currentColor" className="mr-3 h-5 w-5 text-primary dark:text-primary-400">
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="ml-2 grow">
                <p className="mb-3 font-bold text-[#0a6aab] dark:text-[white]">Webinars and Workshops</p>
                
              </div>
            </div>
          </div>

          <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 lg:px-3">
            <div className="flex">
              <div className="mt-0.5 shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                  stroke="currentColor" className="mr-3 h-5 w-5 text-primary dark:text-primary-400">
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="ml-2 grow">
                <p className="mb-3 font-bold text-[#0a6aab] dark:text-[white]">Energy Oman Student Awards</p>
                     
              </div>
            </div>
          </div>

          <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 lg:px-3">
            <div className="flex">
              <div className="mt-0.5 shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                  stroke="currentColor" className="mr-3 h-5 w-5 text-primary dark:text-primary-400">
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="ml-2 grow">
                <p className="mb-3 font-bold text-[#0a6aab] dark:text-[white]">Industry Visits and Field Trips</p>
                    
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>  
</div>
</div>

    </>
  )
}

export default About