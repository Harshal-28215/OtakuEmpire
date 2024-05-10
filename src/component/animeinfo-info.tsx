import { Animeinfo } from "@/utils/type_and_jsons";

type Animeinfo_infoProps = {
    animeinfo: Animeinfo;
}

export default function Animeinfo_info({animeinfo}: Animeinfo_infoProps) {
  const fontBold = 'font-bold'
  const fontNormal = 'font-normal text-sm uppercase text-gray/50 ml-1'

  return (
    <section className='text-white/70 bg-gray-600 p-2 rounded-lg h-full flex flex-col justify-center'>
      <p className={fontBold}>Tital:  <span className={fontNormal}>{animeinfo.title}</span> </p>
      <p className={fontBold}>Aired:  <span className={fontNormal}>{animeinfo.aired.string}</span> </p>
      <p className={fontBold}>Duration:  <span className={fontNormal}>{animeinfo.duration}</span> </p>
      <p className={fontBold}>Status:  <span className={fontNormal}>{animeinfo.status}</span> </p>
      <p className={fontBold}>Score:  <span className={fontNormal}>{animeinfo.score}</span> </p>
      
      <p className={`${fontBold} border-t border-white/20 mt-1 pt-2 pb-2`}>Genres: {
        animeinfo.genres.map((genre, index) => {
          return (
            <span key={index} className={fontNormal}>{genre.name}, </span>
          )
        })
      }</p>

      <p className={`${fontBold} border-t border-white/20 mt-1 pt-1`}>Producers: {
        animeinfo.producers.map((producer, index) => {
          return (
            <span key={index} className={fontNormal}>{producer.name}, </span>
          )
        })
      }</p>

      <p className={`${fontBold}`}>Studios: {
        animeinfo.studios.map((studio, index) => {
          return (
            <span key={index} className={fontNormal}>{studio.name}, </span>
          )
        })
      }</p>
    </section>
  )
}
