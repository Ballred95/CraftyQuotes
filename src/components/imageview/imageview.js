import React, {Component} from 'react' 
import Pics from '../tools/pics'
import Clipart from '../tools/clipart'
import Fonts from '../tools/fonts'
import PicRender from '../picrender'
import {Link} from 'react-router-dom'





export default class Imageview extends Component {
    constructor(props){
        super(props)
        const {largeImageURL: image, user, pageURL} = props.location.state.image

        this.state = {
            picRender: <img src={image} />
        }

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

    
    render() {
        return (
        <div className='home-screen-wrapper'>
            <div className = 'parent'>
                <div className ='pic-render'>{this.state.picRender}</div>
                <div className = 'font-state'>{this.state.fontState}</div>
            </div>
            <div className='tools'>
                <Link to = {{
                    pathname: '/'
                }}><Pics /></Link>
                <Fonts 
              changeFont={(finalValue)=> this.setState({fontState: finalValue})} 
            />
                <Clipart renderFunction = {()=> this.setState({picRender: 'Sticker and Clipart selection'})} />
            
            </div> 
            <div className='buttons'>
            <button id='load-button' onClick = {this.handleLoadRequest}>Load Previous</button>
            <button>Save</button>
            <button>Export</button> 
            </div>
        </div>
        )
    }
    }