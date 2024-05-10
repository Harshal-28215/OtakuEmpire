"use client"

import { useVideocontainer } from '@/utils/context'
import React from 'react'

export default function Playsound_btn() {

     const {isSound, toggleSound} = useVideocontainer()

  return (
    <button className='text-base border rounded-md p-2 uppercase hover:bg-white/10' onClick={()=>toggleSound()}>
      {!isSound?`Play sound`: `Mute sound`}
    </button>
  )
}
