import React, {Component} from 'react' 
import Pics from './tools/pics'
import Fonts from './tools/fonts'
import PicRender from './picrender'
import Imagesearch from './image_search/imagesearch'




export default class Homescreen extends Component{
    constructor(props) {
        super(props)
        
    
        this.state = {
          picRender: <PicRender  />,
          fontState: "",
          text_align: "font-state-left",
          clipart: ""
          
        }
        
        this.renderFunction=this.renderFunction.bind(this)
        this.handleLoadRequest=this.handleLoadRequest.bind(this)
        this.handleSaveRequest=this.handleSaveRequest.bind(this)
        
      }

      handleLoadRequest = async (e) => {
        e.preventDefault()
        const url = "https://craftyquotesapi2.herokuapp.com/saved"
        const request = await fetch(url)
        const response = await request.json()
        this.setState({picRender: <img src ={response[0].imgsrc} />})
        this.setState({fontState: response[0].text_content})
        this.setState({text_align: response[0].text_align})
        this.setState({clipart: response[0].clipart})
        console.log()
        
      }

      handleSaveRequest() {
        fetch('https://craftyquotesapi2.herokuapp.com/saved/1', {
        method: "PUT",
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({
            name: "",
            imgsrc: this.state.picRender,
            text_content: this.state.fontState,
            text_align: "",
            clipart: "" 
        })
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log('error putting save ', error))
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
          <div className = {this.state.text_align} style={{color: this.state.clipart}}>{this.state.fontState}</div>
        </div>
        
        <div className='tools'>
            <Pics renderFunction = {this.renderFunction}/>
            <h2 style={{marginLeft: '30px'}}>Select Image then type in Quote</h2>
            {/* <Fonts 
              changeFont={(finalValue)=> this.setState({fontState: finalValue})} 
              changeAlignment={(alignment)=>this.setState({text_align: alignment })}
            /> */}
            {/* <Clipart renderFunction = {()=> this.setState({picRender: 'Sticker and Clipart Selection'})} /> */}
        
        </div> 
        <div className='buttons'>
        <button onClick = {this.handleLoadRequest}>Load</button>
        {/* <button onClick={()=>alert("Must select a new Image to save.")}>Save</button> */}
        
        </div>
    </div>
    )
}
}