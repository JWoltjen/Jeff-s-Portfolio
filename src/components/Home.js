import React from 'react';
import BackgroundVideo from '../island.mp4';


export default function Home() {
    return (
        <main>
            <video 
                poster="stillBG.jpeg"
                autoPlay
                loop
                muted
                className=
                    'videoBG'>
                <source src={BackgroundVideo} type="video/mp4"/>
            </video>
            <section className='flex text-align center justify-center pt-64 lg: pt-8 px-8 z-10'>
                <h1 className='h-48 flex-wrap align-middle text-center text-sm cursive text-white leading-loose lg: text-6xl z-10'>
                    Hi There, I'm Jeff. 
                    <p>Welcome to my portfolio page!</p>
                </h1>
            </section>
        </main>
    );
}