import React from 'react'
import image from '../test.jpg'

export default function Home() {
    return (
    <main>
        <img src={image} alt='background'className='absolute object-cover w-full h-full' />
        <section className='relative flex justify-center min-h-screen pt-12 lg: pt-64'>
            <h1 className='text-6xl text-white greeting font-bold lg:leading-snug home-name'>Welcome! I am Lucas.</h1>
        </section>
    </main>
        )
}