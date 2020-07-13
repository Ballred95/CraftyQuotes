import React, {Component} from 'react' 
import Pics from './pics'
import Clipart from './clipart'
import Fonts from './fonts'



export default class Homescreen extends Component{
    constructor(props) {
        super(props)
    
        this.state = {
          picRender: null
        }
    
        
      }
    render() {
    return (
    <div className='home-screen-wrapper'>
        
        <div className='tools'>
        <Pics />
        <Fonts />
        <Clipart />
    </div>
        
        
    </div>
    )
}
}