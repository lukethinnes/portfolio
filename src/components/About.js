import React, { useEffect, useState } from 'react';
import imageUrlBuilder from '@sanity/image-url';
import motions from '../movement.png';
import sanityClient from '../client.js';
import BlockContent from '@sanity/block-content-to-react';

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
    return builder.image(source)
}

export default function About() {
    const [author, setAuthor] = useState(null)

    useEffect(() => {
        sanityClient.fetch(`*[_type == 'author']{
            name,
            bio,
            'authorImage': image.asset->url
        }`).then((data) => setAuthor(data[0]))
        .catch(console.error)
    }, [])

    if(!author) return <div>Loading...</div>
    
    return (
        <main className='relative'>
            <img src={motions} alt='Abstract' className='absolute w-full' />
            <div className='p-10 lg:pt-48 container mx-auto relative'>
                <section className='bg-gray-900 rounded-lg shadow-2xl lg:flex pd-20'>
                    <img src={urlFor(author.authorImage).url()} className='rounded w-32 h-32 lg:w-64 lg:h-64 mr-8' alt={author.name} />
                    <div className='text-lg text-white flex flex-col justify-center'>
                        <h1 className='greeting text-6xl text-white mb-4'>
                            Hello! I am{' '}
                            <span className='text-white'>{author.name}.</span>
                        </h1>
                        <div className='prose lg:prose-xl text-gray-200 greeting'>
                            <BlockContent blocks={author.bio} projectId='4p1njx99' dataset='production' />
                        </div>
                    </div>
                </section>
                </div>
        </main>
    )
}