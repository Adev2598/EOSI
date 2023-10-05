import React from "react";
import '../Styles/animations.css'
import globe from '../assets/images/globe.png'

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
            <img src={globe} className="mx-auto my-14 transition duration-300 ease-in-out hover:scale-110" alt="globe"/>
          </div>
       
          <div id="programs" className='mx-auto max-w-2xl py-auto lg:py-0'>
  
          <div className='mx-auto max-w-2xl pt-48 pb-32 sm:py-48 lg:py-20 dark:bg-slate-800'>
            <div id="about" className="text-center px-4">
              <h1 className="dark:text-white text-4xl font-bold text-gray-900 sm:text-6xl">
                Program Components
              </h1>
    
            </div>

            <div className='grid xl:grid-cols-3 sm:grid-cols-1 gap-8 mt-24'>
              
            {/* one */}
              <div className="block rounded-lg bg-[#0a6aab] dark:bg-white p-14 transition duration-300 ease-in-out hover:scale-110">
                <h5 className="mb-2 text-xl font-bold leading-tight text-center dark:text-neutral-800 text-white">
                  Student Contributor Program
                </h5>
                {/* <p className="mb-4 text-base text-neutral-600">
                  Some quick example text to build on the card title and make up the
                   bulk of the card's content.
                </p>         */}
                  {/* <button type="button" className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                    Button
                  </button>         */}
              </div>
            {/* one */}
            {/* one */}
              <div className="block rounded-lg bg-[#0a6aab] dark:bg-white p-14 transition duration-300 ease-in-out hover:scale-110">
                <h5 className="mb-2 text-xl font-bold leading-tight text-center dark:text-neutral-800 text-white">
                  Mentorship Program
                </h5>
                {/* <p className="mb-4 text-base text-neutral-600">
                  Some quick example text to build on the card title and make up the
                   bulk of the card's content.
                </p>         */}
                  {/* <button type="button" className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                    Button
                  </button>         */}
              </div>
            {/* one */}
            {/* one */}
              <div className="block rounded-lg bg-[#0a6aab] dark:bg-white p-14 transition duration-300 ease-in-out hover:scale-110">
                <h5 className="mb-2 text-xl font-bold leading-tight text-center dark:text-neutral-800 text-white">
                  Industry & Field Visits
                </h5>
                {/* <p className="mb-4 text-base text-neutral-600">
                  Some quick example text to build on the card title and make up the
                   bulk of the card's content.
                </p>         */}
                  {/* <button type="button" className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                    Button
                  </button>         */}
              </div>
            {/* one */}
                </div>

                <div className="grid xl:grid-cols-2 sm:grid-cols-1 gap-8 pt-5">
            {/* one */}
              <div className="block rounded-lg bg-[#0a6aab] dark:bg-white p-14 transition duration-300 ease-in-out hover:scale-110">
                <h5 className="mb-2 text-xl font-bold leading-tight text-center dark:text-neutral-800 text-white">
                  Webinars and Workshops 
                </h5>
                {/* <p className="mb-4 text-base text-neutral-600">
                  Some quick example text to build on the card title and make up the
                   bulk of the card's content.
                </p>         */}
                  {/* <button type="button" className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                    Button
                  </button>         */}
              </div>
            {/* one */}
            {/* one */}
              <div className="block rounded-lg bg-[#0a6aab] dark:bg-white p-14 transition duration-300 ease-in-out hover:scale-110">
                <h5 className="mb-2 text-xl font-bold leading-tight text-center dark:text-neutral-800 text-white">
                  Energy Oman Student Awards
                </h5>
                {/* <p className="mb-4 text-base text-neutral-600">
                  Some quick example text to build on the card title and make up the
                   bulk of the card's content.
                </p>         */}
                  {/* <button type="button" className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                    Button
                  </button>         */}
              </div>
            {/* one */}
           </div>         
                     
     </div>
     <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="https://energyoman.net/eosi-registration"
                target="blank"
                className="rounded-md bg-[#42992c] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#004169] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Register now
              </a>
              
            </div>
        </div>   
          </div>

    </>
  )
}

export default About