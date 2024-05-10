import Image from 'next/image'
import '../css/animeinfo.css'
import { Animeinfo } from '@/utils/type_and_jsons'
import Trailer_btn from './trailer-btn'
import Trailer_popup from './trailer-popup'

type AnimeinfoProps = {
    animeinfo: Animeinfo
}

export default function Animeinfo_banner({ animeinfo }: AnimeinfoProps) {

    let description = animeinfo.synopsis;
    let title = animeinfo.title_english;
    const image = animeinfo.trailer.images.maximum_image_url;

    if (description.length > 400) {
        description = description.substring(0, 400) + '...';
    }

    if (!title) {
        title = animeinfo.title;
    }

    return (
        <section className='flex p-5 justify-between bg-gray-600 text-white w-[100%] z-20 md:flex-row flex-col-reverse overflow-hidden'>
            <div className='flex flex-col justify-center mr-5 md:w-2/5 mt-6 md:mt-0'>
                <h1 className='sm:text-4xl text-2xl text-white/70 font-bold uppercase mb-4'>{title}</h1>
                <p className='text-sm'>{description}</p>

                <Trailer_btn />
                <Trailer_popup trailer={animeinfo.trailer.embed_url}/>

            </div>
            <div className='md:w-3/5 relative box-border border rounded-md'>
                <Image className='object-cover h-full w-full' src={image ? image : `/source/no image gif.gif`} alt='naruto' width={750} height={400} />
                <div className='imageshadow md:shadow-[inset_0px_0px_100px_80px_#4b5563] shadow-[inset_0px_0px_40px_40px_#4b5563]'></div>
            </div>
        </section>
    )
}
