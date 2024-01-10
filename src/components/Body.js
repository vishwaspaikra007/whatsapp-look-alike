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
            <Chats setchatsRef={chatsRef => setchatsRef(chatsRef)} scrolled={props.scrolled} setselectedRoomRecipientData={selectedRoomRecipientData => props.setselectedRoomRecipientData(selectedRoomRecipientData)}  setSelectedRoom_id={selectedRoom_id => props.setSelectedRoom_id(selectedRoom_id)} contacts={props.contacts} userData={props.userData}/>
            <Status />
            <Calls />
        </div>
    )
}
