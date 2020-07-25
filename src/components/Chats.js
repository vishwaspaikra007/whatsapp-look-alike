import React, {useState, useEffect, useRef} from 'react'
import ChatContainer from './ChatContainer'
import './Chats.css'
export default function Chats(props) {

    const chatsRef  = useRef()

    useEffect(()=> {
       props.setchatsRef(chatsRef)
       console.log("from chats", props.roomsMessages)
    },[])
     
    return (
        <div ref={chatsRef} className={"chatsContainer"}>
            {
                props.contacts.map((obj, index) => {
                    return (<ChatContainer key={index} roomId={obj._id} name={obj.name} email={obj.email} date={obj.lastMessageData.timestamp} lastMessage={obj.lastMessageData.msg} setselectedRoomRecipientData={selectedRoomRecipientData => props.setselectedRoomRecipientData(selectedRoomRecipientData)}  setSelectedRoom_id={selectedRoom_id => props.setSelectedRoom_id(selectedRoom_id)} seen={obj.seen} received={obj.received} sent={obj.sent} userData={props.userData} senderId={obj.lastMessageData.senderId}/>)
                })
            }
            <div>Tap and hold on chat for more option</div>
        </div>
    )
}
