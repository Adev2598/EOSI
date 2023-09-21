import React from 'react'
import {Hero, Footer, NavBar} from './components'
import {About, ContactUs} from './pages'


const App = () => {
  return (
    <React.Fragment>
      <NavBar/>
      <Hero/>
      <About/>
      <ContactUs/>
      <Footer/>
      {/* <StudentForm/> */}
    </React.Fragment>
  )
}

export default App