import React from 'react'
import NavBar from './NavBar';
import Home from './Home';
import Contatct from './Contatct';
import About from './About';
import Education from './Education';
import Projects from './Projects';

export default function Main() {
  return (
    <>
      <NavBar/>
      <Home/>
      <About/>
      <Education/>
      <Projects/>
      <Contatct/>  
    </>
  )
}

