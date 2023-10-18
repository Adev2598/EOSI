import React, { useState } from 'react'
import {Hero, Footer, NavBar} from './components'
import {About, ContactUs} from './pages'
import { FloatButton } from 'antd';

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
      
      <div className='h-80'>
        <NavBar/>
        <Hero/>
        <About/>
        <ContactUs/>
        <Footer/>
        <FloatButton.BackTop/>
      </div>
      
    </React.Fragment>
    )
  )
}

export default App