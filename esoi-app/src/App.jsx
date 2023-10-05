import React, { useState } from 'react'
import {Hero, Footer, NavBar} from './components'
import {About, ContactUs} from './pages'
import { FloatButton } from 'antd';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

const App = () => {

  const [loading, setLoading] = useState(true);
  const spinner = document.getElementById('spinner');

  if(spinner){
    setTimeout(() => {
      spinner.style.display="none";
      setLoading(false)
    },2000)
  }

  return (
    !loading && (
      <React.Fragment>
      <BrowserRouter>
      <div className='h-80'>
        <NavBar/>
        <Hero/>
        <About/>
        <ContactUs/>
        <Footer/>
        <FloatButton.BackTop/>
      </div>
      <Routes>
        <Route path="/about-eosi" element={<About />} />
        <Route path="/contact-eosi" element={<ContactUs />} />
      </Routes>
      </BrowserRouter>
    </React.Fragment>
    )
  )
}

export default App