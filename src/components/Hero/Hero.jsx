import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'
import logo from '../../assets/dalle.png'


const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={logo} alt="" />
      <h1><span>I'm Mohamed Amrane </span>,IT student.</h1>
      <p>I'm currently looking for an internship.</p>
      <div className="hero-action">
        <div className="nav-connect" onClick={() => window.open('https://www.linkedin.com/in/mohamed-amrane-179bba227/', '_blank', 'noopener,noreferrer')}>
          Connect with me
        </div>
        <div className="hero-resume">
        <a href="https://drive.google.com/file/d/14HbzPjGtGgppi-rCDBLWqOQJ53Woz_Ss/view" download="Mon_CV.pdf">
    My resume
  </a>
        </div>
      </div>
    </div>
  )
}

export default Hero