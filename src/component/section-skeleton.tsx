import React from 'react'
import Skeleton from './skeleton'

export default function Section_skeleton() {
    return (
        <div className='h-[350px] flex flex-col p-2 gap-2'>
            <Skeleton className="sm:w-[200px] w-[170px] h-[250px]" />
            <Skeleton className="w-[170px]" />
            <div className="flex gap-2 flex-col">
                <Skeleton className='w-[70px]' />
                <Skeleton className='w-[70px]' />
                <Skeleton className='w-[90px]' />
            </div>
        </div>
    )
}
