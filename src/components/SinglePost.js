
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
            <article className='container mx-auto my-8 bg-white rounded-lg'>
                        <div className='rounded p-12 flex items-center opacity-80'>
                            <h1 className='font-extrabold cursive sm: text-xl md: text-2xl lg:text-4xl mb-0'>{singlePost.title}</h1>
                        </div>
                        <div className='h-96 w-full overflow-auto font-bold px-4 pb-4 mx-auto prose sm: prose md: prose lg:prose-xl'>
                            <BlockContent 
                                blocks={singlePost.body} 
                                projectId='8rgqlktn' 
                                dataset='production'/> 
                        </div>
                </article>
        </div>
    )
}