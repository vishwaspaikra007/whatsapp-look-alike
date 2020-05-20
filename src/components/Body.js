import React, {useRef, useEffect, useState} from 'react'
import Calls from './Calls'
import Status from './Status'
import Chats from './Chats'
import './Body.css'

export default function Body(props) {
    const bodyRef = useRef()
    const [chatsRef, setchatsRef] = useState()
    let marginTop = 110 + JSON.parse(props.scrolled)
    // let bodyStyle = {
    //     marginTop: marginTop + "px",
    //     height: "calc(100vh - " + marginTop + "px)",
    // }
    useEffect(() => {
        props.shareRef(bodyRef)
        if(chatsRef)
            props.setchatsRefForBody(chatsRef)
    }, [props])

    return (
        <div className={"body"} ref={bodyRef}>
            <Chats setchatsRef={chatsRef => setchatsRef(chatsRef)} scrolled={props.scrolled} names={props.names}/>
            <Status />
            <Calls />
        </div>
    )
}
