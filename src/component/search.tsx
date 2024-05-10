"use client"

import Link from "next/link";
import { useState } from "react";


export default function Search() {

    const [search, setSearch] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    }

    const hadlekeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === "Enter"){
            window.location.href = `/animeinfo/${search}`;
        }
    }

    return (
        <div className="space-x-2 mt-2 md:mt-0 mb-2 md:mb-0">
            <input className="bg-gray-600 border border-white/80 rounded-lg px-2 py-1 w-[60vw] sm:w-auto" type="text" placeholder="search for anime" onChange={handleChange} onKeyDown={hadlekeydown}/>
            <Link className="border border-white px-2 py-1 rounded-lg" href={`/animeinfo/${search}`}>Search</Link>
        </div>
    )
}
