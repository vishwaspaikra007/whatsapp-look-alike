import React from 'react'
import './Block.css'
export default function Block(props) {
    let style = {
        zIndex: props.blockStyle.zIndex, 
        opacity: props.blockStyle.opacity
    }
    return (
        <div style={style} className="block">
            
        </div>
    )
}
