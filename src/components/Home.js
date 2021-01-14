import React from 'react';
import Background from './Background'
export default function Home() {
    return (
    <main>
        <Background/>
        <section className='relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8'>
            <h1 className='text-6xl text-green-100 font-bold cursive leading-none lg:leading-snug home-name'>
                Hi There, I'm Jeff. 
            </h1>
        </section>
        
    </main>
    );
}