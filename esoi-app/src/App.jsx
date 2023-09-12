import React from 'react'
import {Hero, Footer} from './components'
import {About} from './pages'


const App = () => {
  return (
    <React.Fragment>
      <Hero/>
      <About/>
      <Footer/>
      {/* <StudentForm/> */}
    </React.Fragment>
  )
}

export default App