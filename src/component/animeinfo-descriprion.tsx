import { characterapi } from '@/utils/animeinfoapi'
import Animeinfo_characters from './animeinfo-characters'
import { Animeinfo, Character } from '@/utils/type_and_jsons';
import Animeinfo_info from './animeinfo-info';

type Animeinfo_descriprionProps = {
    animeinfo: Animeinfo;
}

export default async function Animeinfo_descriprion({ animeinfo }: Animeinfo_descriprionProps) {

    const animeid = animeinfo.mal_id;

    const charecter = await characterapi(animeid);

    const data = await charecter.slice(0,10);


    return (
        <main className='p-4 z-10 w-full flex items-center relative h-full md:flex-row flex-col justify-center'>

            <aside className='md:w-3/5'>
                <h1 className='text-2xl font-bold text-white/70 mt-5 mb-5'>Characters & Voice Actors</h1>
                <div className='flex flex-wrap gap-3 justify-center items-center'>
                    {data.map((character: Character) => (
                        <Animeinfo_characters key={character.character.mal_id} character={character} />
                    ))}
                </div>
            </aside>
            <aside className='md:h-[50vh] md:w-2/5 mt-10'>
                    <Animeinfo_info animeinfo={animeinfo}/>
            </aside>
        </main>
    )
}
