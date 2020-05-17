import React, {useRef, useEffect} from 'react'
import Calls from './Calls'
import Status from './Status'
import Chats from './Chats'
import './Body.css'

export default function Body(props) {
    const bodyRef = useRef()

    useEffect(() => props.shareRef(bodyRef), [props])

    return (
        <div className={"body"} ref={bodyRef}>
            <Chats />
            <Status />
            <Calls />
        </div>
    )
}
