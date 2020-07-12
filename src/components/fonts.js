import React from 'react' 
import { faFont } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Fonts(props) {
    return (
    <div className='fonts-container'>
        <FontAwesomeIcon className = 'font' icon={faFont} />
    </div>
    )
}