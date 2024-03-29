import React from 'react';
import {NavLink} from 'react-router-dom'; 
import {SocialIcon} from 'react-social-icons'

export default function NavBar() {
    return (
        <header className="bg-red-600 h-24">
            <div className="container mx-auto flex justify-between">
                <nav className="flex ">
                    <NavLink 
                        to="/" 
                        exact 
                        activeClassName="text-white"
                        className="inline-flex items-center py-4 px-3 mr-4 text-red-100 font-bold cursive tracking-widest sm: text-xs md: text-base lg: text-4xl">
                        Jeff
                    </NavLink>
                    <NavLink 
                        to="/post"
                        className="inline-flex items-center py-4 px-3 my-4 rounded text-red-200 hover:text-green-800 cursive sm: text-xs md: text-base lg: text-xl"
                        activeClassName="text-red-100 bg-red-700"
                        >

                        Blog Posts
                    </NavLink>
                    <NavLink 
                        to="/project"
                        className="inline-flex items-center py-4 px-3 my-4 rounded text-red-200 hover:text-green-800 cursive"
                        activeClassName="text-red-100 bg-red-700"
                    >
                        Projects
                    </NavLink>
                    <NavLink 
                        to="/about"
                        className="inline-flex items-center py-4 px-3 my-4 rounded text-red-200 hover:text-green-800 cursive"
                        activeClassName="text-red-100 bg-red-700"
                    >
                        About Me
                    </NavLink>
                     <div className="inline-flex p-3 my-6">
                        <SocialIcon url='https://www.linkedin.com/in/jeff-woltjen-6326b924/' className='mr-4' target='_blank' fgColor='#fff' style={{height: 35, width: 35}}/>
                    </div>
                </nav>
            </div>
        </header>
    )
}