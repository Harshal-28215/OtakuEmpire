import Animeinfo_banner from "@/component/animeinfo-banner";
import Animeinfo_descriprion from "@/component/animeinfo-descriprion";
import Animeinfo_recomended from "@/component/animeinfo-recomended";
import { animeinfoapi } from "@/utils/animeinfoapi";

type AnimeinfoProps = {
    params: {
        name: string;
    },
    searchParams: { [key: string]: string };
}

export default async function Page({params, searchParams}: AnimeinfoProps) {

    const {name} = params;
    const {type} = searchParams;
    

    const animeinfo = await animeinfoapi(name, type);
    
    return (
        <main className="bg-gray-700 min-h-[100vh] relative overflow-x-hidden md:mt-[50px]">
            <Animeinfo_banner animeinfo={animeinfo}/>
            <Animeinfo_descriprion animeinfo={animeinfo}/>
            <Animeinfo_recomended animeid={animeinfo.mal_id}/>
        </main>
    )
}
