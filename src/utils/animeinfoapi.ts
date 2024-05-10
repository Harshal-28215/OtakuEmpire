
export const animeinfoapi = async (name:string,type:string)=>{
    let url = `https://api.jikan.moe/v4/anime?q=${name}&type=${type}`

    if(type === undefined){
        url = `https://api.jikan.moe/v4/anime?q=${name}`
    }

    const res = await fetch(url)
    const data = await res.json()
    const animeinfo = data.data[0]
    

    return animeinfo;
}


export const characterapi = async (id:number)=>{
    const res = await fetch(`https://api.jikan.moe/v4/anime/${id}/characters`,{ cache: 'no-store' })
    const data = await res.json()
    const characters = data.data
 

    return characters;
}

export const recomendedapi = async (id:number)=>{
    const res = await fetch(`https://api.jikan.moe/v4/anime/${id}/recommendations`)
    const data = await res.json()
    const recomended = data.data
    

    return recomended;
}