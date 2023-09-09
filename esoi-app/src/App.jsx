import React from 'react'
import {Hero, Footer, StudentForm} from './components'
import {About} from './pages'

const App = () => {
  return (
    <React.Fragment>
      <Hero/>
      <About/>
      <Footer/>
    </React.Fragment>
  )
}

export default App