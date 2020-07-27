import React, {Component} from 'react' 
import Pics from '../tools/pics'
import Clipart from '../tools/clipart'
import Fonts from '../tools/fonts'
import PicRender from '../picrender'
import {Link} from 'react-router-dom'





export default class Imageview extends Component {
    constructor(props){
        super(props)
        const {largeImageURL: image} = props.location.state.image

        this.state = {
            picRender: <img src={image} />,
            imgsrc: image,
            fontState: "",
            text_align: "font-state-left",
            clipart: "red",
            saved: "Save"
        }

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
        alert('loaded images can only be viewed and not edited/saved at this time.')
        
      }

      handleSaveRequest() {
        fetch('https://craftyquotesapi2.herokuapp.com/saved/1', {
        method: "PUT",
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({
            name: "",
            imgsrc: this.state.imgsrc, 
            text_content: this.state.fontState,
            text_align: this.state.text_align,
            clipart: this.state.clipart 
        })
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log('error putting save ', error))
    this.setState({saved: 'Saved!'})
    }
        
        
    
    render() {
        return (
        <div className='home-screen-wrapper'>
            <div className = 'parent'>
                <div className ='pic-render'>{this.state.picRender}</div>
                <div className = {this.state.text_align} style={{width: '150px'}} style={{color: this.state.clipart}}>{this.state.fontState}</div>
            </div>
            <div className='tools'>
                <Link to = {{
                    pathname: '/'
                }}><Pics /></Link>
                <Fonts 
              changeFont={(finalValue)=> this.setState({fontState: finalValue})} 
              changeAlignment={(alignment)=>this.setState({text_align: alignment })}
              changeColor={(color)=> this.setState({clipart: color})} 
            />
                
            
            </div> 
            <div className='buttons'>
            
            <button onClick={this.handleSaveRequest}>{this.state.saved}</button>
            
            </div>
        </div>
        )
    }
    }