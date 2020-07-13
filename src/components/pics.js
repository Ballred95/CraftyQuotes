import React, { Component } from 'react' 
import { faCameraRetro } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PicRender from './picrender';




export default class Pics extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
          show: null
        }
        
      
        
      }

      


    render () {
    return (
    <div style = {{cursor: 'pointer'}} onClick = {this.props.renderFunction} className='pics-container'>
       <FontAwesomeIcon className = 'pics' icon={faCameraRetro} />
        
    </div>
    )
}
}