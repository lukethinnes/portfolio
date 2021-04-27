import React from 'react'
import Image from '../me.jpg'

export default function About() {
    return (

    <main className="bg-green-60 min-h-screen p-12 mb-12">
        <section className='container mx-auto'>
                <h1 className='text-5xl flex justify-center greeting mb-12'>ABOUT ME</h1>
                <img className='flex justify-center max-h-80 p-18 mx-auto mb-12' src={Image} alt='me'/>
                <p className='text-lg text-gray-400 flex justify-center mb-12 greeting'>
                    I am a full stack software engineer working with HTML / CSS / JavaScript / Ruby / Rails / React / React Native. 
                </p>
                <p className='text-lg text-gray-400 flex justify-center mb-12 greeting'>
                    I have a professional background in residential construction, which taught me the extreme value of discipline and consistency while managing projects. 
                </p>
                <p className='text-lg text-gray-400 flex justify-center mb-12 greeting'>
                    In my spare time, I am passionate about music and when I am away from the screen, you can find me reading, meditating or enjoying the great outdoors.
                </p>
                <span className='text-lg text-gray-400 flex justify-center mb-12 greeting'>If you would like to know more about me, feel free to reach out via LinkedIn!</span>
            </section>
        </main>
    )
}