import React from 'react'
import BackgroundVideo from '../island.mp4';

function Background() {
    return (
            <video 
                autoPlay
                loop
                muted
                className=
                    'z-0 bg-fixed absolute w-screen h-screen object-fill'>
                <source src={BackgroundVideo} type="video/mp4"/>
            </video>
    )
}

export default Background
