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
            alignment: "font-state-left"
            
        }
        this.updateInputValue = this.updateInputValue.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    updateInputValue(e) {
        this.setState({
          inputValue: e.target.value
        });
      }

      handleSubmit() {
        this.setState({finalValue: this.state.inputValue}, 
        ()=>this.props.changeFont(this.state.finalValue)), 
        this.setState({text_align: this.state.alignment},
        ()=>this.props.changeAlignment(this.state.alignment))

        
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
                        <button onClick={()=>this.setState({alignment: "font-state-left"})} >Left</button>
                        <button onClick={()=>this.setState({alignment: "font-state-center"})} >Center</button>
                        <button onClick={()=>this.setState({alignment: "font-state-right"})} >Right</button>

                    </div>
                
                    <input value={this.state.inputValue} onChange={e => this.updateInputValue(e)} />
                    <button onClick = {this.handleSubmit}>Submit</button>
                
                
            </div>
        </Popup>
        )
    }
}