import React from 'react'

interface Props {}

function Header(props: Props) {
    const {} = props

    return (
        <header className='p-2 flex items-center justify-center bg-blue-500 text-white sticky top-0'>
            <p className='font-bold'>AIROL <span className='font-black capitalize '>2022 Summer Camp</span></p>
        </header>
    )
}

export default Header
