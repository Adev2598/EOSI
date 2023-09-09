import React, { useState } from "react";
import { Popover} from '@headlessui/react'

import '../Styles/animations.css'

import Element9White from '../assets/eosi-elements/9.png'
import Element24Color from '../assets/eosi-elements/24.png'
import Element23Color from '../assets/eosi-elements/23.png'
import Element9Color from '../assets/eosi-elements/14.png'

const About = () => {

  return (
    <>
          {/*<div className='dark:bg-slate-800'>
              <img src={Element9White} />
        </div>*/}
         <div className=" dark:bg-slate-800 pb-48">
          <div className='mx-auto max-w-2xl py-32 sm:py-48 lg:py-56'>
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
          </div>

    <div className="container my-24 sm:mx-auto md:px-6">
  
  <section className="mb-32">
    <div className="flex flex-wrap items-center dark:text-white text-gray-900 ml-20">
      <div className="mb-6 w-full shrink-0 grow-0 basis-auto px-3 lg:mb-0 lg:w-4/12">
        <h3 className="mb-6 text-3xl font-bold">
          Program Components
        </h3>

        <p className="mb-12 text-neutral-500 dark:text-neutral-300">
          Nunc tincidunt vulputate elit. Mauris varius purus malesuada neque
          iaculis malesuada. Aenean gravida magna orci, non efficitur est
          porta id. Donec magna diam.
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
                <p className="mb-3 font-bold">Student Contributor Program</p>
                <Popover className="relative">
                  <Popover.Button>
                    <span className="bg-[#0a6aab] rounded-md p-2">Read more {' '}
                      <span className="font-bold" aria-hidden="true">&rarr;</span>
                    </span>                    
                  </Popover.Button>

                    <Popover.Panel className="absolute z-10 bg-white rounded-md my-6">
                      <div className="grid grid-cols-1 p-8">
                        <p className="text-black">
                        Open to undergraduate and graduate students interested in the energy sector
                        </p>
                        <p className='text-black'>
                          Students can submit articles, research papers, and case studies related to energy topics 
                          for publication in Energy Oman Magazine
                        </p>
                        <p className='text-black'>
                          A review panel consisting of industry experts and editors will evaluate submissions and 
                          select the best entries for publication
                        </p>
                        <p className='text-black'>
                          Published contributors will receive recognition in the magazine and gain valuable experience 
                          in scientific writing and research.
                        </p>
                      </div>

                      <img src={Element9Color} className="scale" alt="Student" />
                    </Popover.Panel>
                </Popover>                           
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
                <p className="mb-3 font-bold ">Mentorship Program</p>
                <Popover className="relative">
                  <Popover.Button>
                    <span className="bg-[#0a6aab] rounded-md p-2">Read more {' '}
                      <span className="font-bold" aria-hidden="true">&rarr;</span>
                    </span>                    
                  </Popover.Button>

                    <Popover.Panel className="absolute z-10 bg-white rounded-md my-6">
                      <div className="grid grid-cols-1 p-8">
                        <p className="text-black">
                        Open to undergraduate and graduate students interested in the energy sector
                        </p>
                        <p className='text-black'>
                          Students can submit articles, research papers, and case studies related to energy topics 
                          for publication in Energy Oman Magazine
                        </p>
                        <p className='text-black'>
                          A review panel consisting of industry experts and editors will evaluate submissions and 
                          select the best entries for publication
                        </p>
                        <p className='text-black'>
                          Published contributors will receive recognition in the magazine and gain valuable experience 
                          in scientific writing and research.
                        </p>
                      </div>

                      <img src={Element9Color} className="scale" alt="Student" />
                    </Popover.Panel>
                </Popover>     
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
                <p className="mb-3 font-bold">Webinars and Workshops</p>
                <Popover className="relative">
                  <Popover.Button>
                    <span className="bg-[#0a6aab] rounded-md p-2">Read more {' '}
                      <span className="font-bold" aria-hidden="true">&rarr;</span>
                    </span>                    
                  </Popover.Button>

                    <Popover.Panel className="absolute z-10 bg-white rounded-md my-6">
                      <div className="grid grid-cols-1 p-8">
                        <p className="text-black">
                        Open to undergraduate and graduate students interested in the energy sector
                        </p>
                        <p className='text-black'>
                          Students can submit articles, research papers, and case studies related to energy topics 
                          for publication in Energy Oman Magazine
                        </p>
                        <p className='text-black'>
                          A review panel consisting of industry experts and editors will evaluate submissions and 
                          select the best entries for publication
                        </p>
                        <p className='text-black'>
                          Published contributors will receive recognition in the magazine and gain valuable experience 
                          in scientific writing and research.
                        </p>
                      </div>

                      <img src={Element9Color} className="scale" alt="Student" />
                    </Popover.Panel>
                </Popover>     
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
                <p className="mb-3 font-bold">Energy Oman Student Awards</p>
                <Popover className="relative">
                  <Popover.Button>
                    <span className="bg-[#0a6aab] rounded-md p-2">Read more {' '}
                      <span className="font-bold" aria-hidden="true">&rarr;</span>
                    </span>                    
                  </Popover.Button>

                    <Popover.Panel className="absolute z-10 bg-white rounded-md my-6">
                      <div className="grid grid-cols-1 p-8">
                        <p className="text-black">
                        Open to undergraduate and graduate students interested in the energy sector
                        </p>
                        <p className='text-black'>
                          Students can submit articles, research papers, and case studies related to energy topics 
                          for publication in Energy Oman Magazine
                        </p>
                        <p className='text-black'>
                          A review panel consisting of industry experts and editors will evaluate submissions and 
                          select the best entries for publication
                        </p>
                        <p className='text-black'>
                          Published contributors will receive recognition in the magazine and gain valuable experience 
                          in scientific writing and research.
                        </p>
                      </div>

                      <img src={Element9Color} className="scale" alt="Student" />
                    </Popover.Panel>
                </Popover>     
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
                <p className="mb-3 font-bold">Industry Visits and Field Trips</p>
                <Popover className="relative">
                  <Popover.Button>
                    <span className="bg-[#0a6aab] rounded-md p-2">Read more {' '}
                      <span className="font-bold" aria-hidden="true">&rarr;</span>
                    </span>                    
                  </Popover.Button>

                    <Popover.Panel className="absolute z-10 bg-white rounded-md my-6">
                      <div className="grid grid-cols-1 p-8">
                        <p className="text-black">
                        Open to undergraduate and graduate students interested in the energy sector
                        </p>
                        <p className='text-black'>
                          Students can submit articles, research papers, and case studies related to energy topics 
                          for publication in Energy Oman Magazine
                        </p>
                        <p className='text-black'>
                          A review panel consisting of industry experts and editors will evaluate submissions and 
                          select the best entries for publication
                        </p>
                        <p className='text-black'>
                          Published contributors will receive recognition in the magazine and gain valuable experience 
                          in scientific writing and research.
                        </p>
                      </div>

                      <img src={Element9Color} className="scale" alt="Student" />
                    </Popover.Panel>
                </Popover>     
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