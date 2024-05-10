"use client"

import Image from "next/image";
import { useState } from "react";
import { videocontainerSource } from "./videocontainer-source";
import { useVideocontainer } from "@/utils/context";

type HandlevideoProps = {
    randomNumber: number
}

export default function Handlevideo({randomNumber}:HandlevideoProps) {

    const {isSound} = useVideocontainer()

    const [image, setimage] = useState(false)

    const handleVideoEnded = () => {
        setimage(true)
    }

    return (
        <>
            <video className="h-full w-full object-cover" autoPlay muted={!isSound} onEnded={handleVideoEnded}>
                <source src={videocontainerSource[randomNumber].video} type="video/mp4" />
                Your browser does not support the video tag.
            </video> 
            <Image className="cover-image" style={image?{display:'block'}:{display:'none'}} src={videocontainerSource[randomNumber].image} objectFit="cover" layout="fill" alt="Video Thumbnail" />
        </>
    );
}
