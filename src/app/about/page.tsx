import Image from 'next/image'

export default function Page() {
  return (
    <main className='flex p-5 justify-between bg-gray-600 text-white w-[100%] h-[calc(100vh-50px)] z-20 md:flex-row flex-col-reverse overflow-hidden relative'>
      <div className='flex flex-col justify-center mr-5 md:w-2/5 mt-6 md:mt-0'>
                <h1 className='sm:text-4xl text-2xl text-white/70 font-bold uppercase mb-4'>OtakuEmpire</h1>
                <p className='text-sm'>Welcome to our anime hub, where passion meets information! Dive into the captivating world of anime with our extensive collection of reviews, recommendations, and news updates. Whether you're a seasoned otaku or just dipping your toes into the genre, our site offers something for everyone. Explore in-depth analyses of your favorite series, discover hidden gems, and stay up-to-date with the latest releases. From classic masterpieces to the hottest new releases, we've got you covered. Let your anime journey begin here!</p>

            </div>
            <div className='md:w-3/5 relative box-border border rounded-md'>
                <Image className='object-cover h-full w-full' src='/source/about.jpg' alt='naruto' width={750} height={400} />
                <div className='imageshadow md:shadow-[inset_0px_0px_100px_80px_#4b5563] shadow-[inset_0px_0px_40px_40px_#4b5563]'></div>
            </div>
    </main>
  )
}
