import React, {useState, useEffect, useRef} from 'react'
import ChatContainer from './ChatContainer'
import './Chats.css'
export default function Chats(props) {

    function randomDate() {
        return (Math.random()*30 + 1).toFixed() + "/" + (Math.random()*12 + 1).toFixed() + "/" + "2020"
    }

    const chatsRef  = useRef()

    useEffect(()=> {
       props.setchatsRef(chatsRef)
    },[props.names])
     
    return (
        <div ref={chatsRef} className={"chatsContainer"}>
            {
                props.contacts.map((obj, index) => {
                    return (<ChatContainer key={index} roomId={obj._id} name={obj.name} date={obj.lastMessageData.timestamp} lastMessage={obj.lastMessageData.msg} setSelectedRoomRecipientName={selectedRoomRecipientName => props.setSelectedRoomRecipientName(selectedRoomRecipientName)}  setSelectedRoom_id={selectedRoom_id => props.setSelectedRoom_id(selectedRoom_id)}/>)
                })
            }
            <div>Tap and hold on chat for more option</div>
        </div>
    )
}
