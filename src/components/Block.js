import React from 'react'
import './Block.css'
export default function Block(props) {
    let style = {
        zIndex: props.roomDetails.zIndex, 
        opacity: props.roomDetails.opacity
    }
    return (
        <div style={style} className="block">
            
        </div>
    )
}
