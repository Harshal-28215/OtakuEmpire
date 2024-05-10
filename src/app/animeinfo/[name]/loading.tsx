import Image from 'next/image';

export default function Loading() {
  return (
            <div className='w-[100vw] h-[100vh] bg-gray-700 flex justify-center items-center relative z-40'>
                <Image className='rounded-lg' src="/source/sanji-luffy.gif" alt="Loading..." height={500} width={300}/>
            </div>
        );
    }
