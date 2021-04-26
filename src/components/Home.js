import React from 'react';
import BackgroundVideo from '../island.mp4';


export default function Home() {
    return (
        <>
        <video 
            autoPlay
            loop
            muted
            className=
                'z-0 bg-fixed absolute w-screen h-screen object-fill'>
            <source src={BackgroundVideo} type="video/mp4"/>
        </video>
        <main>
            <section className='relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8 z-10'>
                <h1 className='lg: text-lg cursive text-white lg:leading-snug home-name z-10 sm: text-sm'>
                    Hi There, I'm Jeff. 
                </h1>
            </section>
        </main>
        </>
    );
}