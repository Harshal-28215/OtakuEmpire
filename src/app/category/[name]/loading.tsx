import Section_skeleton from "@/component/section-skeleton";


export default function Loading() {
  return (
    <div className='flex flex-wrap gap-5 justify-center'>
      {Array.from({ length: 6 }).map((item, i) => (
        <Section_skeleton key={i} />
      ))}
    </div>
  )
}
