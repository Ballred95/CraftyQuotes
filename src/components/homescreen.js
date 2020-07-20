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
          fontState: "fontstate test"
        }
    
        
      }

      
      
    render() {
    return (
    <div className='home-screen-wrapper'>
        <div className = 'font-state'>{this.state.fontState}</div>
        <div className ='pic-render'>{this.state.picRender}</div>
        <div className='tools'>
            <Pics renderFunction = {()=> this.setState({picRender: <PicRender  />})}/>
            <Fonts 
              changeFont={(finalValue)=> this.setState({fontState: finalValue})} 
            />
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