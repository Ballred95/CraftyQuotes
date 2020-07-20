import React from 'react' 
import { faIcons } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Popup from "reactjs-popup";

export default function Clipart(props) {
    return (
        <Popup trigger = {
            <div style = {{cursor: 'pointer'}} onClick = {props.renderFunction} className='clip-art'>
                <FontAwesomeIcon className = 'icon' icon={faIcons} />
            </div>} position = "top center" >
                <div>Clip art picker popup.</div>
            </Popup>
    )
}