import { Character } from "@/utils/type_and_jsons"
import Image from "next/image"

type Characterprops = {
    character: Character
}

export default async function Animeinfo_characters({character}: Characterprops) {

  return (
    <section className="flex justify-between p-2 w-[350px] bg-gray-600 rounded-md text-white/80 items-center">
        <div className="flex gap-2 items-center">
            <Image className="w-[50px] h-[50px] object-cover rounded-full" src={character.character.images.webp.image_url} width={40} height={40} alt="characters"/>
            <div> 
                <h1 className="font-bold text-sm">{character.character.name}</h1>
                <p className="text-sm">{character.role}</p>
            </div>
        </div>

        <div className="flex gap-2 items-center">
            <div className="text-right"> 
                <h1 className="font-bold text-sm">{character.voice_actors && character.voice_actors[0]?.person?.name}</h1>
                <p className="text-sm">{character.voice_actors && character.voice_actors[0]?.language}</p>
            </div>
            <Image className="w-[50px] h-[50px] object-cover rounded-full grayscale" src={character.voice_actors?.[0]? character.voice_actors[0].person.images.jpg.image_url  :""} width={40} height={40} alt="characters"/>
        </div>
    </section>
  )
}
