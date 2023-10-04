import React from 'react'
import '../Styles/programs.css'

const Programs = () => {
    
  return (
   
        <div className='mx-auto max-w-2xl pt-48 pb-32 sm:py-48 lg:py-20 dark:bg-slate-800'>
            <div id="about" className="text-center px-4">
              <h1 className="dark:text-white text-4xl font-bold text-gray-900 sm:text-6xl">
                Program Components
              </h1>
    
            </div>

            <div
  id="carouselExampleCaptionsFull"
  class="relative"
  data-te-carousel-init
  data-te-ride="carousel">
  <div
    class="absolute inset-x-0 bottom-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
    data-te-carousel-indicators>
    <button
      type="button"
      data-te-target="#carouselExampleCaptionsFull"
      data-te-slide-to="0"
      data-te-carousel-active
      class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
      aria-current="true"
      aria-label="Slide 1"></button>
    <button
      type="button"
      data-te-target="#carouselExampleCaptionsFull"
      data-te-slide-to="1"
      class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
      aria-label="Slide 2"></button>
    <button
      type="button"
      data-te-target="#carouselExampleCaptionsFull"
      data-te-slide-to="2"
      class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
      aria-label="Slide 3"></button>
  </div>
  <div
    class="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
    <div
      class="relative float-left -mr-[100%] hidden w-full !transform-none bg-cover bg-center bg-no-repeat opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
      data-te-carousel-fade
      data-te-carousel-item
      data-te-carousel-active>
      <video class="" playsinline autoplay muted loop>
        <source
          class=""
          src="https://tecdn.b-cdn.net/img/video/Lines.mp4"
          type="video/mp4" />
      </video>
      <div
        class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
        style="background-color: rgba(0, 0, 0, 0.6)">
        <div class="flex h-full items-center justify-center">
          <div class="px-md-0 px-14 text-center text-white">
            <h2 class="mb-4 text-3xl font-semibold">
              Learn Tailwind Elements
            </h2>
            <h5 class="mb-6 text-lg font-semibold">
              Best & free guide of responsive web design
            </h5>
            <div class="md:space-x-2">
              <a
                type="button"
                class="mb-2 inline-block rounded border-2 border-white px-6 py-2 text-xs font-medium uppercase leading-tight text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 md:mb-0"
                href="#!"
                role="button"
                data-te-ripple-init
                data-te-ripple-color="light"
                >Start tutorial</a
              >
              <a
                type="button"
                class="inline-block rounded border-2 border-white px-6 py-2 text-xs font-medium uppercase leading-tight text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
                href="#!"
                role="button"
                data-te-ripple-init
                data-te-ripple-color="light"
                >Read more</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="relative float-left -mr-[100%] hidden w-full !transform-none bg-cover bg-center bg-no-repeat opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
      data-te-carousel-fade
      data-te-carousel-item>
      <video class="" playsinline autoplay muted loop>
        <source
          class=""
          src="https://tecdn.b-cdn.net/img/video/forest.mp4"
          type="video/mp4" />
      </video>
      <div
        class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
        style="background-color: rgba(0, 0, 0, 0.3)">
        <div class="flex h-full items-center justify-center">
          <div class="px-md-0 px-14 text-center text-white">
            <h2 class="mb-4 text-3xl font-semibold">
              You can place here any content
            </h2>
          </div>
        </div>
      </div>
    </div>
    <div
      class="relative float-left -mr-[100%] hidden w-full !transform-none bg-cover bg-center bg-no-repeat opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
      data-te-carousel-fade
      data-te-carousel-item>
      <video class="" playsinline autoplay muted loop>
        <source
          class=""
          src="https://tecdn.b-cdn.net/img/video/Tropical.mp4"
          type="video/mp4" />
      </video>
      <div
        class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
        style="
          background: linear-gradient(
            45deg,
            rgba(29, 236, 197, 0.7),
            rgba(91, 14, 214, 0.7) 100%
          );
        ">
        <div class="flex h-full items-center justify-center">
          <div class="px-md-0 px-14 text-center text-white">
            <h2 class="mb-4 text-3xl font-semibold">
              And cover it with any mask
            </h2>
            <a
              type="button"
              class="inline-block rounded border-2 border-white px-6 py-2 text-xs font-medium uppercase leading-tight text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
              href="#!"
              role="button"
              data-te-ripple-init
              data-te-ripple-color="light"
              >Learn more</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <button
    class="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
    type="button"
    data-te-target="#carouselExampleCaptionsFull"
    data-te-slide="prev">
    <span class="inline-block h-8 w-8">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="h-6 w-6">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15.75 19.5L8.25 12l7.5-7.5" />
      </svg>
    </span>
    <span
      class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
      >Previous</span
    >
  </button>
  <button
    class="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
    type="button"
    data-te-target="#carouselExampleCaptionsFull"
    data-te-slide="next">
    <span class="inline-block h-8 w-8">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="h-6 w-6">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M8.25 4.5l7.5 7.5-7.5 7.5" />
      </svg>
    </span>
    <span
      class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
      >Next</span
    >
  </button>
</div>            
          
     </div>
  )
}

export default Programs