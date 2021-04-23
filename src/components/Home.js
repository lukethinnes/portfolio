import React from 'react'
import image from '../test.jpg'

export default function Home() {
    return (
    <main>
        <img src={image} alt='background'className='absolute object-cover w-full h-full' />
        <section>
            <h1>Welcome to Lucas Thinnes' portfolio.</h1>
        </section>
    </main>
        )
}