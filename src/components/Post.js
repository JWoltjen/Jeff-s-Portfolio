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
        <div className='full-screen-video-container'>
            <video 
                autoPlay
                poster="stillBG.jpeg"
                loop
                muted
                className='video'>
                <source src={BackgroundVideo} type="video/mp4"/>
            </video>
            <div className='h-full'>
                    <section className='content-center text-center px-10'>
                        <h1 className='sm: text-xl md: text-2xl lg: text-4xl text-white cursive py-10  z-10'>A journey in front-end engineering</h1>
                        <div className='container max-h-80 overflow-auto'>
                            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 z-10'>
                                {postData && postData.map((post, index) => (
                                <article>
                                    <Link to={'/post/' + post.slug.current} key={post.slug.current}>
                                            <span 
                                                className='block h-20 relative rounded shadow leading-snug bg-red-700 border-l-8 border-green-400 z-10 opacity-75'
                                                key={index}
                                            >
                                            <img 
                                                src={post.mainImage.asset.url}
                                                alt={post.mainImage.alt}
                                                className='w-full h-full rounded-r object-scale-down flex justify-end absolute'
                                            />
                                            <span className='block relative h-full flex justify-end items-end pr-1 object-fill'>
                                                <h3 className='text-gray-800 text-lg font-bold cursive px-3 py-4 text-red-100 rounded'>
                                                    {post.title}
                                                </h3>
                                            </span>
                                            </span>
                                        </Link>
                                    </article> 
                                    ))}
                            </div>
                        </div>
                        </section>
                </div>
        </div>
    ) 
}