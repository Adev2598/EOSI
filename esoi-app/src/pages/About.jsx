import React, {useState} from "react";
import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'
import '../Styles/animations.css'
import Element14Color from '../assets/eosi-elements/14.png'
import globe from '../assets/images/globe.png'

const features = [
  {
    name: 'Student Contributor Program',
    description:
      'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Mentorship Program',
    description:
      'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.',
    icon: LockClosedIcon,
  },
  {
    name: 'Energy Oman Student Awards',
    description:
      'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Industry Visits & Field Trips',
    description:
      'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
    icon: FingerPrintIcon,
  },
  {
    name: 'Visits & Field Trips',
    description:
      'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
    icon: FingerPrintIcon,
  },
]

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
  
       <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          {/* <h2 className="text-base font-semibold leading-7 text-indigo-600">Deploy faster</h2> */}
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Program Components
          </p>
          {/* <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-white">
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum
            pulvinar et feugiat blandit at. In mi viverra elit nunc.
          </p> */}
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16 ">
                <dt className="text-base font-semibold leading-7 text-gray-900 dark:text-white">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

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