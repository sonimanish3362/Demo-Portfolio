import React from 'react'
import "./Hero.css";
import profile from "../../assets/profile_img.svg";

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile} alt="" />
        <h1><span>I am web</span> developer from india</h1>
        <p>Resposible for developing responsive website by using html , css , Javascript. React</p>
        <div className="hero-action">
        <div className="hero-connect">Connect With</div>
        <div className="hero-resume">My Resume</div>
        </div>
    </div>
  )
}

export default Hero