import React, {useRef, useEffect, useState} from 'react'
import Calls from './Calls'
import Status from './Status'
import Chats from './Chats'
import './Body.css'

export default function Body(props) {
    const bodyRef = useRef()
    const [chatsRef, setchatsRef] = useState()

    useEffect(() => {
        props.shareRef(bodyRef)
        if(chatsRef)
            props.setchatsRefForBody(chatsRef)
    }, [props])

    return (
        <div className={"body"} ref={bodyRef}>
            <Chats setchatsRef={chatsRef => setchatsRef(chatsRef)} scrolled={props.scrolled} names={props.names} setSelectedRoomRecipientName={selectedRoomRecipientName => props.setSelectedRoomRecipientName(selectedRoomRecipientName)}  setSelectedRoom_id={selectedRoom_id => props.setSelectedRoom_id(selectedRoom_id)} contacts={props.contacts}/>
            <Status />
            <Calls />
        </div>
    )
}
