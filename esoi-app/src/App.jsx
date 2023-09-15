import React from 'react'
import {Hero, Footer} from './components'
import {About, ContactUs} from './pages'


const App = () => {
  return (
    <React.Fragment>
      <Hero/>
      <About/>
      <ContactUs/>
       <Footer/>
      {/* <StudentForm/> */}
    </React.Fragment>
  )
}

export default App