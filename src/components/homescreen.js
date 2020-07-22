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
        this.handleLoadRequest=this.handleLoadRequest.bind(this)
        
      }

      handleLoadRequest = async (e) => {
        e.preventDefault()
        const url = "https://craftyquotes-api.herokuapp.com/saved"
        const request = await fetch(url)
        const response = await request.json()
        this.setState({picRender: <img src ={response[1].imgsrc} />})
        this.setState({fontState: response[1].text_content})
        console.log()
        
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
        <button onClick = {this.handleLoadRequest}>Load saved</button>
        <button>Save</button>
        <button>Export</button> 
        </div>
    </div>
    )
}
}