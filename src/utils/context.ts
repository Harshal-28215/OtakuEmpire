"use client"

import { AnimeContext } from "@/context/animecontext"
import { useContext } from "react"

export const useVideocontainer = ()=>{
    const context = useContext(AnimeContext)

    return context
}