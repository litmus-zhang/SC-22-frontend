import React from 'react'

interface Props
{
    label: string,
    name: string,
    placeholder: string,
    type: string,
    autoComplete: string,
}

function FormInputs(inputs: Props) {
    const {label,name,placeholder, type
    , autoComplete } = inputs

    return (
        <div className='flex flex-col'>
            <label className='text-md font-medium text-gray-600'>{label}</label>
            <input
                className='border border-gray-300 rounded-lg p-2 w-full outline-none focus:border-blue-500 focus:border-2 '
                type={type}
                placeholder={placeholder}
                name={name}
                autoComplete={autoComplete}
                />
        </div>
    )
}

export default FormInputs
