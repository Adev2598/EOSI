import React, { useEffect, useRef } from "react";
import '../Styles/programs.css'
import { TERipple } from 'tw-elements-react'
import AirCapture from '../assets/videos/AirCapture.mp4'


const Programs = () => {
    const videoEl = useRef(null);

    const attemptPlay = () => {
        videoEl &&
          videoEl.current &&
          videoEl.current.play().catch(error => {
            console.error("Error attempting to play", error);
          });
      };
    
      useEffect(() => {
        attemptPlay();
      }, []);

  return (
   
        <div className='mx-auto max-w-2xl pt-48 pb-32 sm:py-48 lg:py-20 dark:bg-slate-800'>
            <div id="about" className="text-center px-4">
              <h1 className="dark:text-white text-4xl font-bold text-gray-900 sm:text-6xl">
                Program Components
              </h1>
    
            </div>

            <div className='grid xl:grid-cols-2 sm:grid-cols-1 gap-14'>
                <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                  <video src={AirCapture} width="800" height="400" playsInline loop ref={videoEl}/>                
                <div className="p-6">
                    <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                        Industry Visits & Field Trips
                    </h5>
                    <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </p>
                </div>
                </div>
            {/* first end */}
                <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                  <video src={AirCapture} width="800" height="400" playsInline loop ref={videoEl}/>                
                <div className="p-6">
                    <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                        Industry Visits & Field Trips
                    </h5>
                    <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </p>
                </div>
                </div>
            {/* second end */}
            </div>
                      
     </div>
  )
}

export default Programs