import React from 'react' 

export default function Imagelist(props) {
    return (
    <div className='image_container'>
        {props.images.map(image => {
            return <img className='imgs' src={image.previewURL} />
        })}
    </div>
    )
}
