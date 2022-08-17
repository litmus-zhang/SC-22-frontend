import React from 'react'

interface Props { }
const Link = 'mailto:abdulsalamlukmon9@gmail.com'

function Support(props: Props) {
    const {} = props

    return (
        <a
        href={Link}
        target="_blank"
        rel="noreferrer"
        className="fixed  bottom-3 right-2 bg-blue-500 text-white p-3 w-fit rounded-full flex items-center cursor-pointer gap-2">
            Message Coach Litmus
        </a>
    )
}

export default Support
