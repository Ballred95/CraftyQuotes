import React from 'react' 


export default function Imagelist(props) {
    return (
    <div className='container'>
        <div className = 'row'>
        {props.images.map(image => {
            return (<div key={image.id} className="col-md-4" style={{ marginBottom:"2rem" }}>
                <div className = 'imageList_container'>
                <img className='imageList_image' src={image.largeImageURL} />
                </div>
                <div className = 'image_details'>
                    <button>Select</button>
                </div>
            </div>)
        })}

        </div>
       
    </div>
    )
}
