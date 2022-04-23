import React from 'react';
import "./Cover.css";
import heroVideo from "../../components/assets/videos/heroVideo.mp4";
import AnimatedPage from '../AnimatedPage/AnimatedPage';


const Cover = () => {
  return (
    <AnimatedPage>
    <div className='video__container'>
      <video className='video' src={heroVideo} autoPlay loop muted />
      <h1 className='cover__title'>John Alejandro Jaramillo P.</h1>
      <p className='cover__subtitle'>Desarrollador Frontend</p>
      <div className='hero1'></div>
      <div className='hero2'></div>
    </div>
    </AnimatedPage>
  )
}

export default Cover;