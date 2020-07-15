import React from 'react' 

export default function Imagesearch(props) {
    
    return (
    <div className=''>
        <form onSubmit ={props.handleGetRequest}>
            <input type ='text' autoComplete = 'off' name = 'searchValue' placeholder = 'Search Images' />
            <button>SEARCH</button>
        </form>
    </div>
    )
}