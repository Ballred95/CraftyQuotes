import React from 'react' 
import Pics from './pics'
import Clipart from './clipart'
import Fonts from './fonts'

export default function Tools(props) {
    return (
    <div className='tools'>
        <Pics />
        <Fonts />
        <Clipart />
    </div>
    )
}