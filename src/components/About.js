import React, { useEffect, useState } from 'react';
import sanityClient from '../client.js'; 
import imageUrlBuilder from '@sanity/image-url'; 
import BlockContent from '@sanity/block-content-to-react';
import BackgroundVideo from '../island.mp4'
import {Carousel} from '3d-react-carousal'

const builder = imageUrlBuilder(sanityClient); 
function urlFor(source){
    return builder.image(source); 
}

export default function About() {

    let slides = [
    <img  src="https://i.imgur.com/gJ98sAG.jpg" alt="1" />,
    <img  src="https://i.imgur.com/55t7iH8.jpg" alt="2" />  ,
    <img  src="https://i.imgur.com/mg7dfz5.jpg" alt="3" />  ,
    <img  src="https://i.imgur.com/edeARYs.jpg" alt="4" />  ,
    <img src="https://i.imgur.com/w7Fvj7v.jpg"  alt="5" /> , 
    <img src="https://i.imgur.com/ViXilqt.jpg"  alt="6" /> , 
    <img src="https://i.imgur.com/WiqMtBI.jpg"  alt="7" /> , 
    <img src="https://i.imgur.com/cyPT2et.jpg"  alt="8" /> , 
    <img src="https://i.imgur.com/li8NI9r.jpg"  alt="9" /> ,
    <img src="https://i.imgur.com/vmF34qA.jpg"  alt="10" /> ,
    <img src="https://i.imgur.com/zJevqtb.jpg?1" alt="pirate" /> ,
    <img src="https://i.imgur.com/BHJOdnE.jpg"  alt="12" /> ,
    <img src="https://i.imgur.com/UgSP23m.jpg"  alt="13" /> ,
    <img src="https://i.imgur.com/I498eUJ.jpg" alt="14" />, 



    ]
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
            className='video'>
            <source src={BackgroundVideo} type="video/mp4"/>
        </video>
         <div className='full-screen-video-content'>
                <section className='bg-white-200 rounded-lg shadow-2xl lg:flex p-2'>
                        <h1 className='cursive text-3xl text-red-600 mb-2'>
                            Hey there. I'm {author.name}
                        </h1>
                        <div className='prose lg:prose-xl text-red-600 cursive'>
                            <BlockContent blocks={author.bio} projectId='8rgqlktn' dataset='production'/>
                        </div>
                </section>
                <div className='p-1'> 
                    <Carousel className='' slides={slides} autoplay={true} interval={5000}/>
                </div>
            </div>
        </div> 
    );
}