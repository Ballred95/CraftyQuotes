import React from 'react' 

export default function Imageview(props) {

    console.log(props.location.state.image)
    const {largeImageURL: image, user, pageURL} = props.location.state.image
    return (
    <div className=''>
        <img src={image} />
    </div>
    )
}