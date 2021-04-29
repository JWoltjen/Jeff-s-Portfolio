import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import sanityClient from '../client.js';
import BackgroundVideo from '../island.mp4'

export default function Post() {
    const [postData, setPost] = useState(null); 

    useEffect(() => {
        sanityClient.fetch(
                `*[_type == 'post']{
                title,
                slug,
                mainImage{
                    asset->{
                        _id,
                        url
                    }, 
                    alt
                }
            }`)
            .then((data) => setPost(data))
            .catch(console.error)
    }, []);

    return (
        <>
        <video 
            autoPlay
            poster="stillBG.jpeg"
            loop
            muted
            className=
                'videoBG'>
            <source src={BackgroundVideo} type="video/mp4"/>
        </video>
        <main className='relative p-12 z-10'>
            <section className='container mx-auto'>
                <h1 className='text-6xl flex justify-center text-white cursive z-10'>A journey in front-end engineering</h1>
                <h2 className='text-lg text-white flex justify-center mb-12 cursive'></h2>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {postData && postData.map((post, index) => (
                   <article>
                       <Link to={'/post/' + post.slug.current} key={post.slug.current}>
                            <span 
                                className='block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-green-400'
                                key={index}
                            >
                            <img 
                                src={post.mainImage.asset.url}
                                alt={post.mainImage.alt}
                                className='w-full h-full rounded-r object-scale-down absolute'
                            />
                             <span className='block relative h-full flex justify-end items-end pr-4 pb-4'>
                                 <h3 className='text-gray-800 text-lg font-bold cursive px-3 py-4 bg-red-700 text-red-100 bg-opacity-75 rounded'>
                                     {post.title}
                                 </h3>
                             </span>
                             </span>
                        </Link>
                     </article> 
                    ))}
                </div>
            </section>
        </main>
        </>
    ) 
}