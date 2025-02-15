import Link from 'next/link';
import '../css/videocontainer.css';
import Handlevideo from './handlevideo';
import { videocontainerSource } from './videocontainer-source';
import Playsound_btn from './playsound-btn';


export default function Videocontainer() {

    let randomNumber = Math.floor(Math.random() * videocontainerSource.length)
 

    return (
        <main className="w-[100vw] h-[calc(100vh-58px)] relative overflow-hidden z-[30]">
            <Handlevideo randomNumber={randomNumber} />

            <div className='transparent-cover' >
                <div className="container mx-auto px-6 h-full relative">
                    <div className="absolute bottom-[25vh] left-3">
                        <h1 className="sm:text-5xl text-2xl text-white/70 font-bold uppercase">{videocontainerSource[randomNumber].name}</h1>
                    </div>
                    <div className="absolute bottom-[15vh] left-3 flex gap-3">
                        <Link href={`/animeinfo/${videocontainerSource[randomNumber].name}`}>
                            <p className='text-base border rounded-md p-2 uppercase hover:bg-white/10'>anime info</p>
                        </Link>
                        <Playsound_btn />
                    </div>
                </div>
            </div>
        </main>
    )
}
