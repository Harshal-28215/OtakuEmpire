import { Category } from '@/utils/type_and_jsons';
import Image from 'next/image'
import Link from 'next/link';

type CategoryProps = {
  category: Category;
}

export default function Categorysection({ category }: CategoryProps) {

  let title = category.title;

  if (title.length > 18) {
    title = title.substring(0, 15) + '...';
  }

  return (
    <Link className="w-[200px] h-[250] overflow-hidden relative rounded-md text-white bg-gray-700" href={`/animeinfo/${category.title.replace(/\?/g, '')}?type=${category.tvInfo.showType}`}>
      <Image className="object-cover w-[200px] h-[250px] hover:scale-105 transition-all" src={category.poster} alt="naruto" width={200} height={250} />

      <div className="p-2">
        <h1 className="text-lg">{title}</h1>
        <div className="flex gap-2 text-sm flex-col">
          <p>{category.tvInfo.sub ? "sub: " + category.tvInfo.sub : "sub: -"}</p>
          <p>{category.tvInfo.dub ? "dub: " + category.tvInfo.dub : "dub: -"}</p>
          <p>{category.tvInfo.showType ? "showtype: " + category.tvInfo.showType : "showtype: -"}</p>
        </div>
      </div>
    </Link>
  )
}
