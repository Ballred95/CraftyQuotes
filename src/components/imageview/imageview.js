import React, {Component} from 'react' 
import Pics from '../tools/pics'
import Clipart from '../tools/clipart'
import Fonts from '../tools/fonts'
import PicRender from '../picrender'





export default class Imageview extends Component {
    constructor(props){
        super(props)
        const {largeImageURL: image, user, pageURL} = props.location.state.image

        this.state = {
            picRender: <img src={image} />
        }

    }

    
    render() {
        return (
        <div className='home-screen-wrapper'>
            {/* <Workstation rendering = {this.state.picRender} /> */}
            <div className ='pic-render'>{this.state.picRender}</div>
            <div className='tools'>
                <Pics renderFunction = {()=> this.setState({picRender: <PicRender  />})}/>
                <Fonts renderFunction = {()=> this.setState({picRender: 'what font u want?'})} />
                <Clipart renderFunction = {()=> this.setState({picRender: 'what clipart u want?'})} />
            
            </div> 
            <div className='buttons'>
            <button>Save</button>
            <button>Export</button> 
            </div>
        </div>
        )
    }
    }