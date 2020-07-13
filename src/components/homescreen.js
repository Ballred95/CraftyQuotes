import React, {Component} from 'react' 
import Pics from './pics'
import Clipart from './clipart'
import Fonts from './fonts'
import PicRender from './picrender'
import Workstation from './workstation'



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
        {/* <Workstation rendering = {this.state.picRender} /> */}
        <div className ='pic-render'>{this.state.picRender}</div>
        <div className='tools'>
        <Pics renderFunction = {()=> this.setState({picRender: <PicRender />})}/>
        <Fonts />
        <Clipart />
    </div>
        
        
    </div>
    )
}
}