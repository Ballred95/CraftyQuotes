import React from 'react' 
import { faFont } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Fonts(props) {
    return (
    <div style = {{cursor: 'pointer'}} onClick = {props.renderFunction} className='fonts-container'>
        <FontAwesomeIcon className = 'font' icon={faFont} />
    </div>
    )
}