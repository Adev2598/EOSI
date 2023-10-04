import React, {useState} from "react";
import '../Styles/animations.css'
import Element14Color from '../assets/eosi-elements/14.png'
import globe from '../assets/images/globe.png'
import {Programs} from '../components'

const About = () => {

    return (
    <>
          {/*<div className='dark:bg-slate-800'>
              <img src={Element9White} />
        </div>*/}
         <div className=" dark:bg-slate-800 pb-20">
          <div className='mx-auto max-w-2xl pt-48 pb-32 sm:py-48 lg:py-34'>
            <div id="about" className="text-center px-4">
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
            <img src={globe} className="mx-auto my-14" alt="globe"/>
          </div>
       
          <div id="programs" className='mx-auto max-w-2xl py-auto lg:py-0'>
  
       <Programs/>

          {/* <div className="pb-24">
            <Carousel effect="fade" autoplay>
              <div className="text-xl text-white font-medium sm:px-8 flex bg-[#0a6aab] dark:bg-[#f5f5f5] dark:text-gray-900 rounded-lg">
                <h1 style={contentStyleSlider}>Student Contributor Program</h1>
              </div>
              <div className="text-xl text-white font-medium sm:px-8 flex bg-[#0a6aab] dark:bg-[#f5f5f5] dark:text-gray-900 rounded-lg">
                <h1 style={contentStyleSlider}>Mentorship Program</h1>
              </div>
              <div className="text-xl text-white font-medium sm:px-8 flex bg-[#0a6aab] dark:bg-[#f5f5f5] dark:text-gray-900 rounded-lg">
                <h1 style={contentStyleSlider}>Energy Oman Student Awards</h1>
              </div>
              <div className="text-xl text-white font-medium sm:px-8 flex bg-[#0a6aab] dark:bg-[#f5f5f5] dark:text-gray-900 rounded-lg">
                <h1 style={contentStyleSlider}>Industry Visits & Field Trips</h1>
              </div>
            </Carousel>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-[#0a6aab] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#004169] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                More Info
              </a>
            </div>
          </div> */}

          <div className='mx-auto max-w-2xl pt-48 pb-32 sm:py-48 lg:py-20'>
            <div id="about" className="text-center px-4">
              <h1 className="dark:text-white text-4xl font-bold text-gray-900 sm:text-6xl">
                How to Participate
              </h1>              
            </div>            
          </div>



            </div>   
          </div>

    </>
  )
}

export default About