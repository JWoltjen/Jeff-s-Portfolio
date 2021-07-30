import React from 'react';
import BackgroundVideo from '../island.mp4';


export default function Home() {
    return (

      <div className='full-screen-video-container'>
        <video 
            autoPlay
            poster="stillBG.jpeg"
            loop
            muted
            className='full-screen-video-container video'>
            <source src={BackgroundVideo} type="video/mp4"/>
        </video>
         <div className='full-screen-video-content'>
            <h1 className='lg:text-7xl md:text-5xl sm:text-3xl py-10 text-3xl text-white text-center cursive'>Hi There, I'm Jeff</h1>
            <p className='lg:text-7xl md:text-5xl sm:text-3xl text-white text-center cursive'>Welcome to my portfolio page!</p>
          </div>
        </div>
        );
}