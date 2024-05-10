import { recomendedapi } from "@/utils/animeinfoapi";
import Animeinfo_recomendsection from "./animeinfo-recomendsection";
import { Recomend } from "@/utils/type_and_jsons";


export default async function Animeinfo_recomended({ animeid }: { animeid: number }) {

    const data = await recomendedapi(animeid);

    const recomended = await data.slice(0, 18);

    return (
        <main className="p-6">
            <h1 className="text-2xl font-bold text-white/70 mt-5 mb-5">Recommended for you</h1>
            <section className="flex flex-wrap gap-3 justify-center items-center">
                {recomended.map((recomend: Recomend) => (
                    <Animeinfo_recomendsection key={recomend.entry.mal_id} recomend={recomend}/>
                ))}
            </section>
        </main>
    )
}
