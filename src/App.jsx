import { useState } from 'react'
import './styles/scss/main.scss'
import Navbar from "./components/Navbar";
import {HeroSection} from "./components/HeroSection";

function App() {

  return (
    <>
        <Navbar></Navbar>
        <HeroSection></HeroSection>
    </>
  )
}

export default App
