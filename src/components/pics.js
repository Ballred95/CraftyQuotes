import React from 'react' 
import { faCameraRetro } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Pics(props) {
    return (
    <div className='pics-container'>
       <FontAwesomeIcon className = 'pics' icon={faCameraRetro} />
    </div>
    )
}