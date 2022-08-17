import React from 'react'
import Header from '../components/Header'
import MemberCard from '../components/MemberCard'
import Support from '../components/Support'

interface Props {}
const MEMBER = [
    {
        name: 'Lukmon Abdulsalam',
        email: 'abdulsalam@airol.com'
    },
    {
        name: 'Timmy Tim',
        email: 'Timmy@airol.com'
    },
    {
        name: 'John Doe',
        email: 'john@gmail.com'
    },
    {
        name: 'Jane Doe',
        email: 'Doe@gmail.com'
    },
    {
        name: 'Johan Timothy',
        email: 'Johan.tim@yahoo.com'
    }
]
function Home(props: Props) {
    const {} = props

    return (
        <div>
            <Header />
            <main>
                <div>
                    Welcome to Team Spring 2020!
                </div>
                <div>
                    This is a simple application to help you choose your team.
                    Here are your team members:
                    <div className='flex flex-wrap gap-2'>
                        {
                            MEMBER.map((member) => (<MemberCard key={member.name} {...member} />))
                   }
                    </div>
                </div>
                <Support/>
            </main>
        </div>
    )
}

export default Home
