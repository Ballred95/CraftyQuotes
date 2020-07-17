import React from 'react' 

export default function Imagelist(props) {
    return (
    <div className='image_container'>
        {props.images.map(image => {
            return <button key={image.id} onClick= {props.clh}><img className='imgs' src={image.previewURL} /></button>
        })}
    </div>
    )
}
