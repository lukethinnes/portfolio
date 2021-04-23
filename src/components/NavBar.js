import React from 'react';
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

export default function NavBar() {
    return (
        <header className='bg-gray-900'>
            <div className='container mx-auto flex justify-between'>
                <nav className='flex'>
                    <NavLink 
                        to='/' 
                        exact 
                        activeClassName='text-white'
                        className='
                        inline-flex 
                        items-center 
                        py-8 px-3 
                        mr-4 
                        text-white
                        hover:text-green
                        text-4xl
                        font-bold
                        open
                        tracking-widest
                    '>
                        LUCAS THINNES
                    </NavLink>
                    <NavLink to='/project'
                    className='
                    inline-flex 
                    items-center 
                    py-3 px-3 
                    my-6 
                    text-white
                    rounded
                    hover:text-green-900'
                    activeClassName='text-red-100 bg-gray-400'
                    >
                        Projects
                    </NavLink>
                    <NavLink to='/post'
                    activeClassName='text-red-100 bg-gray-400'
                    className='
                    inline-flex 
                    items-center 
                    py-3 px-3 
                    my-6 
                    text-white
                    rounded
                    hover:text-green-900
                    
                    '>
                        Blog Posts
                    </NavLink>
                    <NavLink to='/about'
                    activeClassName='text-red-100 bg-gray-400'
                    className='
                        inline-flex 
                        items-center 
                        py-3 px-3 
                        my-6 
                        text-white
                        rounded
                        hover:text-green-900
                    '>
                        About
                    </NavLink>
                </nav>
                <div className='inline-flex py-8 px-3 my-6'>
                    <SocialIcon url='https://github.com/lukethinnes' className='mr-4' target='_blank' fgColor='#fff' style={{ height: 35, width: 35 }} />
                    <SocialIcon url='https://www.linkedin.com/in/lucas-thinnes/' className='mr-4' target='_blank' fgColor='#fff' style={{ height: 35, width: 35 }} />
                    <SocialIcon url='https://lucasthinnes.medium.com/' className='mr-4' target='_blank' fgColor='#fff' style={{ height: 35, width: 35 }} />
                </div>
            </div>
        </header>
    )
}