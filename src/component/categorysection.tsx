import Image from 'next/image'
import Link from 'next/link';

type category={
  mal_id:string,
  title:string,
  type:string,
  status:string,
  episodes:number
  images:{
    webp:{
      large_image_url:string
    }
  }
}

export default function Categorysection({ category }: {category:category}) {

  let title = category.title;

  if (title.length > 18) {
    title = title.substring(0, 15) + '...';
  }

  return (
    <Link className="w-[170px] sm:w-[250px] overflow-hidden relative rounded-md text-white bg-gray-700" href={`/animeinfo/${category.title.replace(/\?/g, '')}?type=${category.type}`}>
      <Image className="object-cover w-full h-[250px] hover:scale-105 transition-all" src={category.images.webp.large_image_url} alt="naruto" width={200} height={300} />

      <div className="p-2">
        <h1 className="text-lg">{title}</h1>
        <div className="flex gap-2 text-sm flex-col">
          <p>Type:{category.type}</p>
          <p>Status:{category.status}</p>
          <p>Episodes:{category.episodes}</p>
        </div>
      </div>
    </Link>
  )
}
