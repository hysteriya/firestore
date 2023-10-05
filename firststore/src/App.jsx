import React from 'react'
import {Header, Courses, Features, Footer, Getintouch, Navbar, Ricoz, Testimonials} from "./componenets/index"

const App = () => {
  return ( 
  <>
    <Navbar />
    <Header />
    <Features />
    <Ricoz/>
    <Courses/>
    <Testimonials/>
    <Getintouch/>
    <Footer/>
  </> 
  )
}

export default App;