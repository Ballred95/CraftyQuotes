import React, {Component} from 'react' 
import Pics from './tools/pics'
import Clipart from './tools/clipart'
import Fonts from './tools/fonts'
import PicRender from './picrender'




export default class Homescreen extends Component{
    constructor(props) {
        super(props)
    
        this.state = {
          picRender: null,
          fontState: null
        }
    
        
      }
    render() {
    return (
    <div className='home-screen-wrapper'>
        {/* <Workstation rendering = {this.state.picRender} /> */}
        <div className ='pic-render'>{this.state.picRender}</div>
        <div className='tools'>
            <Pics renderFunction = {()=> this.setState({picRender: <PicRender  />})}/>
            <Fonts test = {() => this.setState({fontState: 'test font'})} />
            <Clipart renderFunction = {()=> this.setState({picRender: 'Sticker and Clipart Selection'})} />
        
        </div> 
        <div className='buttons'>
        <button>Save</button>
        <button>Export</button> 
        </div>
    </div>
    )
}
}