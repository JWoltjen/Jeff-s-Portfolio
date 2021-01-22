import React from 'react'
import BackgroundVideo from '../island.mp4';

function Background() {
    return (
     <video 
            autoPlay
            loop
            muted
            className=
                'bg-local absolute w-screen h-screen z-0 object-fill'>
            <source src={BackgroundVideo} type="video/mp4"/>
        </video>
    )
}

export default Background
