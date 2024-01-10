import React, {useState, useEffect, useRef} from 'react'
import ChatContainer from './ChatContainer'
import './Chats.css'
export default function Chats(props) {

    const [contacts, setContacts] = useState([])
    const chatsRef  = useRef()

    useEffect(()=> {
       props.setchatsRef(chatsRef)
       console.log("from chats", props.roomsMessages)
    },[])

    useEffect(() => {
        if(props.contacts.length && Object.keys(props.contacts[0].lastMessageData).length)
            setContacts(props.contacts.sort((obj1, obj2) => {return new Date(obj1.lastMessageData.timestamp).getTime() < new Date(obj2.lastMessageData.timestamp).getTime() ? 1 : -1}))
    }, [props.contacts])
     
    return (
        <div ref={chatsRef} className={"chatsContainer"}>
            {
                contacts.map((obj, index) => {
                    return (<ChatContainer key={index} roomId={obj._id} recipientId={obj.recipientId} name={obj.name} email={obj.email} date={obj.lastMessageData.timestamp} lastMessage={obj.lastMessageData.msg} setselectedRoomRecipientData={selectedRoomRecipientData => props.setselectedRoomRecipientData(selectedRoomRecipientData)}  setSelectedRoom_id={selectedRoom_id => props.setSelectedRoom_id(selectedRoom_id)} seen={obj.seen} received={obj.received} sent={obj.sent} userData={props.userData} senderId={obj.lastMessageData.senderId} newMSGCount={obj.newMSGCount}/>)
                })
            }
            <div>Tap and hold on chat for more option</div>
        </div>
    )
}
