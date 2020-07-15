import React from 'react' 

export default function Imagelist(props) {
    return (
    <div className=''>
        {props.images.map(image => {
            return <img src={image.previewURL} />
        })}
    </div>
    )
}
