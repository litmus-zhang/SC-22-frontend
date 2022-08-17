import React from 'react'
import Button from '../components/Button'
import FormInputs from '../components/FormInputs'

interface Props { }
const FORM_INPUTS = [
    {
        label: 'Full Name',
        name: 'fullName',
        placeholder: 'Lukmon Abdulsalam',
        type: 'text',
        autoComplete: 'on',
    },
    {
        label: 'Email',
        name: 'email',
        placeholder: 'Lukmon@airol.com',
        type: 'email',
        autoComplete: 'on',
    }
]

function Signin(props: Props) {
    const { } = props
    
    const Submit = (e: React.FormEvent<HTMLFormElement>) =>
    { 
        e.preventDefault()
        console.log('Form submitted')
        // e.target.reset()
    }

    return (
        <div className='flex flex-col h-screen items-center justify-center bg-gray-50'>
          
            <form className='w-fit flex flex-col gap-4 bg-white shadow-md p-6'>
            <p className='text-2xl  font-medium mb-4'>Sign in to your account</p>  
                {FORM_INPUTS.map((input) => (<FormInputs key={input.name} {...input} />))}
                <Button type='submit' text="Sign in"/>
            </form>
        </div>
    )
}

export default Signin
