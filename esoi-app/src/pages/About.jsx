import React from 'react'
import Element9White from '../assets/eosi-elements/9.png'
import Element24Color from '../assets/eosi-elements/24.png'
import Element23Color from '../assets/eosi-elements/23.png'

const About = () => {
  return (
    <>
    <div className='dark:bg-slate-800 grid grid-cols-1 px-48 align-middle pb-48'>
        
        <div className='text-center bg-cover'
        // style={{backgroundImage: `url(${Element23Color})`, height: 600}}
        >
            
            <h3 className="dark:text-white text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl mt-8 mr-3">
              About EOSI
            </h3>
            <p className="dark:text-white mt-6 text-lg leading-8 text-gray-600 px-14 ">The
            Energy Oman Student Initiativeaims to provide a platform for students 
            interested in the energy sector to gain knowledge, 
            engage with industry professionals, and contribute to Energy Oman Magazine. 
            The program aims to foster learning, networking, and career development opportunities for students.
            </p>
        </div>
    </div>
    </>
  )
}

export default About