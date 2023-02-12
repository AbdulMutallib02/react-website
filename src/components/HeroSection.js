import React from 'react';
import './HeroSection.css';
import '../App.css'
import { Button } from './Button'

const HeroSection = () => {
  return (
    <div className="hero-container">
        <video src="/public/videos/video-2.mp4" autoPlay loop muted />
        <h1>ADVENTURE AWAITS</h1>
        <p>What are you waiting for?</p>
        <div className="hero-btns">
            <Button className="btns" buttonStyle='btn--outline' buttonSize='btn--large'>Get Started</Button>
            <Button className="btns" buttonStyle='btn--primary' buttonSize='btn--large'>Watch Trailer</Button>
        </div>
    </div>
  )
}

export default HeroSection