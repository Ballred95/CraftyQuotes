import React from 'react' 
import { faIcons } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Clipart(props) {
    return (
    <div className='clip-art'>
        <FontAwesomeIcon style = {{cursor: 'pointer'}} onClick = {props.renderFunction} className = 'icon' icon={faIcons} />
    </div>
    )
}