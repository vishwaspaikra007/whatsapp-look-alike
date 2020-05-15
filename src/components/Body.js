import React, {useRef, useEffect} from 'react'
import Calls from './Calls'
import Status from './Status'
import Chats from './Chats'

export default function Body(props) {
    const bodyStyle = {
        width: "100%",
        height: "calc(100vh - 50px)",
        overflowY: "hidden",
        scrollSnapType: "x mandatory",
        display: "grid",
        gridTemplateColumns: "100% 100% 100%",
        // scrollBehavior: "smooth"
    }

    const bodyRef = useRef()

    useEffect(() => props.shareRef(bodyRef), [props])

    return (
        <div style={bodyStyle} ref={bodyRef}>
            <Chats />
            <Status />
            <Calls />
        </div>
    )
}
