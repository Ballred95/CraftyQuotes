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
          fontState: ""
        }
        
        this.renderFunction=this.renderFunction.bind(this)
        
      }

      componentDidMount() {
        fetch('https://craftyquotes-api.herokuapp.com/saved')
        .then(response => response.json())
        .then(data => console.log(data));
      }

      renderFunction() {
        this.setState({picRender: <PicRender  />})
        this.setState({fontState: ""})
      }
      
    render() {
    return (
    <div className='home-screen-wrapper'>
        <div className = 'parent'>
          <div className ='pic-render'>{this.state.picRender}</div>
          <div className = 'font-state'>{this.state.fontState}</div>
        </div>
        
        <div className='tools'>
            <Pics renderFunction = {this.renderFunction}/>
            <Fonts 
              changeFont={(finalValue)=> this.setState({fontState: finalValue})} 
            />
            <Clipart renderFunction = {()=> this.setState({picRender: 'Sticker and Clipart Selection'})} />
        
        </div> 
        <div className='buttons'>
        <button onClick={()=>this.setState({picRender: <img src = "https://pixabay.com/get/53e3dc474a50aa14f6da8c7dda7936791138d6e25b556c4870267ed09448cc58b8_1280.jpg"/>})}>Load</button>
        <button>Save</button>
        <button>Export</button> 
        </div>
    </div>
    )
}
}