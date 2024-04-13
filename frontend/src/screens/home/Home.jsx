import React from 'react'
import Spline from '@splinetool/react-spline';
import Navbar from '../../components/navbar/Navbar';
import "./Home.css"
import About from '../../components/about/About';
import Skills from '../../components/skills/Skills';
import Projects from '../../components/projects/Projects';
import Contact from '../../components/contact/Contact';
import Footer from '../../components/footer/Footer';
export default function Home() {
  return (
    <>
        <Navbar/>
        <div className='salutation typewriter'>HELLO<br/> I AM <br/><h1>TEESHA</h1> </div> 
        <div className='teesha'><Spline  scene="https://prod.spline.design/sZ7uyrwO55q0PVOP/scene.splinecode" /></div>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
        <Footer/>
    </>
  )
}
