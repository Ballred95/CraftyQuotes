import React, {Component} from 'react' 
import Pics from './pics'
import Clipart from './clipart'
import Fonts from './fonts'
import PicRender from './picrender'



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
        {this.state.picRender}
        <div className='tools'>
        <Pics renderFunction = {()=> this.setState({picRender: <PicRender />})}/>
        <Fonts />
        <Clipart />
    </div>
        
        
    </div>
    )
}
}