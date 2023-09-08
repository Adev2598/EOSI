import React from 'react'

import '../Styles/animations.css'

import Element9White from '../assets/eosi-elements/9.png'
import Element24Color from '../assets/eosi-elements/24.png'
import Element23Color from '../assets/eosi-elements/23.png'
import Element9Color from '../assets/eosi-elements/14.png'

const About = () => {

  return (
    <>
          <div className='dark:bg-slate-800'>
              <img src={Element9White} />
          </div>
         <div className=" dark:bg-slate-800 pb-48">
          <div className='mx-auto max-w-2xl py-32 sm:py-48 lg:py-56'>
          <div className="text-center pl-14">
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
          </div>                  
    </>
  )
}

export default About