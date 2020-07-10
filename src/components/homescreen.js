import React from 'react' 
import Tools from './tools'
import WorkStation from './workstation'

export default function Homescreen(props) {
    return (
    <div className='home-screen-wrapper'>
        < WorkStation />
        <Tools />
            
        
    </div>
    )
}