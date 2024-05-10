import { Recomend } from '@/utils/type_and_jsons'
import Image from 'next/image'
import Link from 'next/link'

export default function Animeinfo_recomendsection({ recomend}: { recomend: Recomend}) {

    const title = recomend.entry.title.length > 18 ? recomend.entry.title.substring(0, 15) + '...' : recomend.entry.title;

  return (
        <Link className="w-[200px] h-[250] overflow-hidden relative rounded-md text-white bg-gray-600" href={`/animeinfo/${recomend.entry.title.replace(/\?/g, '')}`}>
            <Image className="object-cover w-[200px] h-[250px] hover:scale-105 transition-all" src={recomend.entry.images.webp.large_image_url} alt="naruto" width={200} height={250} />

            <div className="p-2">
                <h1 className="text-lg">{title}</h1>
            </div>
        </Link>
  )
}
