import React from 'react' 
import { faIcons } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Clipart(props) {
    return (
    <div className='clip-art'>
        <FontAwesomeIcon className = 'icon' icon={faIcons} />
    </div>
    )
}