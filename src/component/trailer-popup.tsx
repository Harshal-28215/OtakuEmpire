"use client"

import { useVideocontainer } from '@/utils/context'
import Image from 'next/image';
import React from 'react'

export default function Trailer_popup({trailer}: {trailer: string}) {
    const { isPlayer, toggleAnime } = useVideocontainer();

    const stopVideo = () => {
        if (trailer) {
            const iframe = document.getElementById('youtube-iframe') as HTMLIFrameElement;
            const src = iframe.src.split('?')[0];
            iframe.src = src + '?autoplay=0';
        }
        toggleAnime();
    };

    return (
        <div className={`fixed top-0 left-0 w-[100vw] h-[100vh] bg-black/70 z-30 flex justify-center items-center ${!isPlayer ? "hidden" : "block"} flex-col`}>
            <div className='w-[70%] sm:h-[50%] md:h-[70%] h-[25%]  mt-[45px]'>
                {trailer ? <iframe id="youtube-iframe" className='w-full h-full' src={trailer}></iframe> :
                <Image className='object-cover h-full w-full' src={`/source/no image gif.gif`} alt='naruto' width={750} height={400} />
                }
                
            </div>
            <button className='border border-white/65 rounded-md px-4 py-2 mt-2 bg-gray-600 hover:bg-gray-700' onClick={stopVideo}>X</button>
        </div>
    );
}
