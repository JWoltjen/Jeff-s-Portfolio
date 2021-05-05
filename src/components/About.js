import React, { useEffect, useState } from 'react';
import sanityClient from '../client.js'; 
import imageUrlBuilder from '@sanity/image-url'; 
import BlockContent from '@sanity/block-content-to-react';
import BackgroundVideo from '../island.mp4'


const builder = imageUrlBuilder(sanityClient); 
function urlFor(source){
    return builder.image(source); 
}

export default function About() {
    const [author, setAuthor] = useState(null); 

    useEffect(() =>{
        sanityClient.fetch(`*[_type == 'author']{
            name, 
            bio,
            "authorImage": image.asset->url
        }`).then((data) => setAuthor(data[0]))
        .catch(console.error)
    }, []);

    if (!author) return <div>Loading...</div>; 
    
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
            <div className='p-10 lg:pt-48 container mx-0 relative'>
                <section className='bg-white-200 rounded-lg shadow-2xl lg:flex p-2'>
                    <img src={urlFor(author.authorImage).url()} 
                         className='rounded w-32 h-32 lg:w-64 lg:h-64 mr-8' 
                         alt={author.name}
                    />
                    <div className="text-lg flex flex-col justify-center">
                        <h1 className='cursive text-6xl text-red-600 mb-4'>
                            Hey there. I'm {" "}
                            <span className='text-cursive'>{author.name}</span>
                        </h1>
                        <div className='prose lg:prose-xl text-red-600 cursive'>
                            <BlockContent blocks={author.bio} projectId='8rgqlktn' dataset='production'/>
                        </div>
                    </div>
                </section>
            </div>
        </div> 
        </div>
    );
}