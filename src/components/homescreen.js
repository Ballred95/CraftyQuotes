import React from 'react' 
import Tools from './tools'
import Workstation from './workstation'


export default function Homescreen(props) {
    return (
    <div className='home-screen-wrapper'>
        <Workstation />
        <Tools />
            
        
    </div>
    )
}