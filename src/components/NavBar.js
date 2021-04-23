import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
    return (
        <header className='bg-blue-900'>
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
                        text-red-100
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
                        text-red-100
                        rounded
                        hover:text-green-800
                    '>
                        Projects
                    </NavLink>
                    <NavLink to='/post'
                    className='
                        inline-flex 
                        items-center 
                        py-3 px-3 
                        my-6 
                        text-red-100
                        rounded
                        hover:text-green-800
                    '>
                        Blog Posts
                    </NavLink>
                    <NavLink to='/about'
                    className='
                        inline-flex 
                        items-center 
                        py-3 px-3 
                        my-6 
                        text-red-100
                        rounded
                        hover:text-green-800
                    '>
                        About
                    </NavLink>
                </nav>
            </div>
        </header>
    )
}