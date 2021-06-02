import React from 'react'
import image from '../test.jpg'

export default function Home() {
    return (
    <main>
        <img src={image} alt='background'className='absolute object-cover w-full h-full' />
        <section className='relative flex justify-center min-h-screen pt-12 lg: pt-60'>
            <h1 className=' text-white greeting font-bold lg:leading-snug home-name
            text-shadow: 18px 18px 18px rgb(200 200 200 / 88%), 18 18 18px rgb(155 203 206 / 88%)'>Hi! I am Lucas.</h1>
        </section>
    </main>
    )
}