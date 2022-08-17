import React from 'react'
import TeamCard from '../components/TeamCard'

interface Props {}

const TEAMS = [
    {
        name: 'Team Moonbeam',
    },

    {
        name: 'Team Starlight',
    }, {
        name: 'Team Honey Blossom',
    }, {
        name: 'Team Snowflake',
    },
    {
        name: 'Team Electra',
    }
]
function TeamChoice(props: Props) {
    const {} = props

    return (
        <div className='flex flex-col items-center justify-center h-screen'>
            <h1 className='text-2xl font-bold'> Choose your preferred team </h1>
            <div className='w-full flex flex-wrap justify-center gap-2 my-4'>
                {TEAMS.map((team) => (<TeamCard key={team.name} {...team} />))}
        </div>
           
        </div>
    )
}

export default TeamChoice
