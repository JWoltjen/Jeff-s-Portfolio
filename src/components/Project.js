import React, { useState, useEffect } from 'react'
import sanityClient from '../client.js'
import BackgroundVideo from '../island.mp4'
export default function Project() {
    const [projectData, setProjectData] = useState(null)

    useEffect(() => {
        sanityClient.fetch(`*[_type == 'project']{
        title,
        date,
        place,
        description,
        link,
        tags
        }`).then((data) => setProjectData(data))
        .catch(console.error)
    }, []);

    return (
    <div className='full-screen-video-container'>
        <video 
            autoPlay
            loop
            muted
            className='full-screen-video-container video'>
            <source src={BackgroundVideo} type="video/mp4"/>
        </video>
         <div className='full-screen-video-content py-8'>
             <div className='overflow-auto'>
                <section className='content-center px-2 grid grid-cols-2 gap-8 grid-gap-3'>
                    {projectData && projectData.map((project, index) =>(
                    <article className='relative rounded-md bg-white p-4 opacity-80'>
                        <h3 className='text-gray-800 text-xl font-bold mb-2 hover:text-red-700'> 
                        <a
                            href={project.link}
                            alt={project.title}
                            target='_blank'
                            rel="noopener noreferrer"
                        >
                            {project.title}
                        </a>  
                        </h3>

                        <div className='text-gray-500 space-x-4'>
                            <span>
                                <strong className='font-bold'>Finished on</strong>:{' '}
                                {new Date(project.date).toLocaleDateString()}
                            </span>
                            <span>
                                <strong className="font-bold">Place</strong>:{' '}
                                {project.place}
                            </span>
                            <div className='container mx-auto max-w-lg sm: h-5 md: h-10 lg: h-20 overflow-scroll'>
                                <p className='my-6 text-sm text-gray-700 leading-snug'>
                                    {project.description}
                                </p>
                            </div>
                            <a 
                                href={project.link}
                                rel='noopener noreferrer' 
                                target='_blank' 
                                className='text-red-500 font-bold hover:underline hover:text-red-400'
                            >
                                View the Project{" "}
                            <span role='img' aria-label='right pointer'>
                                ►
                            </span>
                            </a>
                            
                        </div>
                    </article>
                    ))}
                </section>
            </div>
        </div>
    </div>
    )
}