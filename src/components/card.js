import React from 'react' 


export default function (props) {

    const dragStart = e =>{
        const target = e.target;

        e.dataTransfer.setData('card_id', target.id);

        setTimeout(()=> {
            target.style.display = 'none';
        }, 0)

    }

    const dragOver = e => {
        e.stopPropagation();
    }

    return (
    <div className={props.className}
    draggable={props.draggable}
    id={props.id}
    onDragStart={dragStart}
    onDragOver={dragOver}
        

    >
        {props.children}
    </div>
    )
}