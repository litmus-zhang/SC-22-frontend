import React from 'react'

interface Props
{
    name: string,
    email: string,
}

function MemberCard(props: Props) {
    const {name,email} = props

    return (
        <div className='flex flex-col bg-blue-300 p-3 w-fit h-fit rounded-md'>
            <p className='font-bold text-md'>{ name}</p>
            <a href="mailto:" className='text-sm font'>{ email}</a>
        </div>
    )
}

export default MemberCard
