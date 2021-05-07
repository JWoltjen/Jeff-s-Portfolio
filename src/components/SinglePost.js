
import React, { useEffect, useState } from 'react'; 
import { useParams } from 'react-router-dom'; 
import sanityClient from '../client.js'; 
import imageUrlBuilder from '@sanity/image-url';
import BlockContent from '@sanity/block-content-to-react'
import BackgroundVideo from '../island.mp4'
const builder = imageUrlBuilder(sanityClient); 
function urlFor(source){
    return builder.image(source)
}

export default function SinglePost() {
    const [singlePost, setSinglePost] = useState(null)
    const { slug } = useParams(); 

    useEffect(() => {
        sanityClient.fetch(`*[slug.current == '${slug}']{
            title,
            _id,
            slug,
            mainImage{
                asset->{
                    _id,
                    url
                }
            },
            body,
            "name": author->name,
            "authorImage": author->image
        }`).then((data) => setSinglePost(data[0]))
        .catch(console.error)
    }, [slug]);

    if (!singlePost) return <div>Loading...</div>

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
         <div className='full-screen-video-content py-8'>
            <article className='container mx-auto bg-white rounded-lg'>
                <header className='flex flex-row relative'>
                    <div className='absolute flex items-center justify-center'>
                        <div className='bg-white bg-opacity-30 rounded p-12'>
                            <h1 className='font-extrabold cursive text-3xl lg:text-6xl mb-4'>{singlePost.title}
                            </h1>
                            <span>
                            <div className='flex justify-center text-gray-800'>
                                <img src={urlFor(singlePost.authorImage).url()} 
                                alt={singlePost.name}
                                className='w-20 h-20 rounded-full'
                                />
                                 <p className='cursive flex items-center pl-2 text-2xl'>
                                     {singlePost.name}
                                 </p>
                                </div>
                            </span>
                        </div>
                     </div>
                        <div className='justify-center'>
                            <img 
                                src={singlePost.mainImage.asset.url}
                                alt={singlePost.title} 
                                className='items-center rounded-t'
                                style={{ height: '20rem' }}
                            />
                        </div>
                    </header>
                        <div className='h-auto font-extrabold px-4 pb-4 mx-auto prose lg:prose-xl max-w-full'>
                            <BlockContent blocks={singlePost.body} projectId='8rgqlktn' dataset='production'/> 
                        </div>
                </article>
            </div>
        </div>
    )
}