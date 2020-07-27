import React, {Component} from 'react' 
import { faFont } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Popup from "reactjs-popup";


export default class Fonts extends Component {
    constructor(props){
        super(props)

        this.state = {
            inputValue: "",
            finalValue: "",
            alignment: "font-state-left",
            color:'purple',
            colorInputValue: 'purple',
            
            
        }
        this.updateInputValue = this.updateInputValue.bind(this)
        this.updateColorInputValue = this.updateColorInputValue.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    updateInputValue(e) {
        this.setState({
          inputValue: e.target.value
        });
      }

      updateColorInputValue(e) {
        this.setState({
          colorInputValue: e.target.value
        });
      }

      handleSubmit() {
        this.setState({finalValue: this.state.inputValue}, 
        ()=>this.props.changeFont(this.state.finalValue)), 
        this.setState({text_align: this.state.alignment},
        ()=>this.props.changeAlignment(this.state.alignment))
        this.setState({color: this.state.colorInputValue},
        ()=>this.props.changeColor(this.state.color))
        

        
      }
    
render() {
        return (
            <Popup trigger = {
        <div style = {{cursor: 'pointer'}} onClick = {this.props.renderFunction} className='fonts-container'>
            <FontAwesomeIcon className = 'font' icon={faFont} />
        </div>} position = "top center" >
            <div>
                
                <h3>Type {this.state.finalValue}</h3>
                
                    <div className='alignment'>
                        <button className='left-button' onClick={()=>this.setState({alignment: "font-state-left"})} ><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-align-start" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M1.5 1a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-1 0v-13a.5.5 0 0 1 .5-.5z"/>
                        <path d="M3 7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7z"/>
                        </svg></button>
                        <button className='center-button' onClick={()=>this.setState({alignment: "font-state-center"})} >
                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-align-center" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 1a.5.5 0 0 1 .5.5V6h-1V1.5A.5.5 0 0 1 8 1zm0 14a.5.5 0 0 1-.5-.5V10h1v4.5a.5.5 0 0 1-.5.5zM2 7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7z"/>
</svg>
                        </button>
                        <button className='right-button' onClick={()=>this.setState({alignment: "font-state-right"})} >
                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-align-end" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M14.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 1 0v-13a.5.5 0 0 0-.5-.5z"/>
  <path d="M13 7a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7z"/>
</svg>
                        </button>

                    </div>

                    <input value={this.state.inputValue} onChange={e => this.updateInputValue(e)} />
                    <input value={this.state.colorInputValue} onChange={e => this.updateColorInputValue(e)} />
                    <button onClick = {this.handleSubmit}>Submit</button>
                
                
            </div>
        </Popup>
        )
    }
}