"use client"

import { useVideocontainer } from "@/utils/context"

export default function Trailer_btn() {

    const {toggleAnime} = useVideocontainer()

  return (
    <button className='border border-white/65 px-2 py-1 font-bold rounded-lg mt-3 self-start hover:bg-gray-700 bg-gray-500' onClick={()=>{toggleAnime()}}>
        Play trailer
    </button>
  )
}
