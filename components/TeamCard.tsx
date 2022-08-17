import React from 'react'
import Button from './Button'

interface Props
{
    name: string,
}

function TeamCard(props: Props) {
    const {name} = props

    return (
        <div className='flex flex-col  items-center justify-center w-40 h-40 bg-blue-500 shadow-md p-2 rounded-md cursor-pointer hover:transition-all hover:text-blue-500'>
            <h1 className='font-bold text-white text-center w-full'>{name }</h1>
        </div>
    )
}

export default TeamCard
