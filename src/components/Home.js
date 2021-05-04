import React from 'react';
import BackgroundVideo from '../island.mp4';


export default function Home() {
    return (
        <>
          <video 
              autoPlay
              poster="stillBG.jpeg"
              loop
              muted
              className='videoBG'>
              <source src={BackgroundVideo} type="video/mp4"/>
          </video>
          <main className='h-screen'>
            <h1 className='lg:text-9xl md:text-7xl sm:text-5xl py-10 text-3xl text-white text-center center cursive text-2xl'>Hi There, I'm Jeff</h1>
            <p className='lg: text-7xl md:text5-xl sm:text-3xl text-white text-center cursive'>Welcome to my new portfolio page</p>
          </main>
        </>
        );
}