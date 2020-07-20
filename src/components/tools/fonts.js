import React from 'react' 
import { faFont } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Popup from "reactjs-popup";

export default function Fonts(props) {
    return (
        <Popup trigger = {
    <div style = {{cursor: 'pointer'}} onClick = {props.renderFunction} className='fonts-container'>
        <FontAwesomeIcon className = 'font' icon={faFont} />
    </div>} position = "top center" >
        <div>font picker popup.</div>
    </Popup>
    )
}