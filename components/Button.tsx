import React from 'react'

interface Props
{
    text: string,
    type: "submit" | "reset" | "button" |"disabled",
}

function Button(props: Props) {
    const {text, type} = props

    return (
        <button className='flex items-center justify-center font-sans capitalize font-bold bg-blue-500 p-3 rounded-md text-white shadow-md w-full'>
            {text}
        </button>
    )
}

export default Button
