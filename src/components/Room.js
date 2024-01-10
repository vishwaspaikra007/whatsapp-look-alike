import React, {useEffect, useState, useRef} from 'react'
import './Room.css'
import ProfilePic from './ProfilePic'
import socket from './socket.io-clientConfig'
import ContentEditable from 'react-contenteditable'
import formatTime from './formatTime'
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser'
import MsgBox from './MsgBox'

export default function Room(props) {
    const [x, setX] = useState(100)
    const [createX, setCreateX] = useState(100)
    const [inputHeight, setInputHeight] = useState("60px")
    const [offSetForMSGHeight, setOffSetForMSGHeight] = useState(115)
    // const [msgStatus, setMsgStatus] = useState({})

    const inputRef = useRef()
    const MesssagesRef = useRef()
    const contentEditableRef = useRef()
    const msgValueRef = useRef("")
    let lastMSGFrom
    let messageOwnerChanged = false

    useEffect(() => {
        console.log('props.selectedRoom_id', props.selectedRoom_id)
        if(props.selectedRoomRecipientData._id)
        {    
            setX(0)
            setCreateX(0)
        }
        else
        {    
            setX(100)
            setCreateX(100)
        }
    }, [props.selectedRoomRecipientData])

    const goBack =()=> {
        props.setSelectedRoom_id(undefined)
        props.setselectedRoomRecipientData({})
        window.history.back()
    }

    const lastMSGIntoView = () => {
        if(MesssagesRef.current)
            MesssagesRef.current.scrollTo(0, MesssagesRef.current.scrollHeight)
    }
    const sendMSG = ()=> {
        if(props.selectedRoom_id) {
            let msgData = {
                msg: msgValueRef.current,
                senderId: props.userData._id,
                senderName: props.userData.name,
                timestamp: Date.now()
                }
            socket.emit('msgToServer', {
                msgData,
                roomId: props.selectedRoom_id,
                receiverEmail: props.selectedRoomRecipientData.email,
                senderEmail: props.userData.email
            })
            let roomsMessages = JSON.parse(JSON.stringify(props.roomsMessagesRef.current))
            roomsMessages[props.selectedRoom_id].list.push(msgData)
            console.log('roomsMessages', roomsMessages)
            props.setRoomsMessages(roomsMessages)
            msgValueRef.current = ""
            setOffSetForMSGHeight(115)
            lastMSGIntoView()
            contentEditableRef.current.focus()
        }
    }

    useEffect(() => {
        lastMSGIntoView()
    }, [props.roomsMessagesRef.current,x,offSetForMSGHeight])

    const handleChange = e => {
        msgValueRef.current = e.target.value
        console.log(msgValueRef.current, "inputHeight", inputHeight)
        setInputHeight(inputRef.current.clientHeight + 15 + "px")
        setOffSetForMSGHeight(inputRef.current.clientHeight + 70)
    }

    useEffect(() => {
        if(props.selectedRoom_id && props.selectedRoomRecipientData.email)
        console.log("from room",props.roomsMessagesRef.current[props.selectedRoom_id].list.slice(-1)[0].senderId)
        if(props.selectedRoom_id && props.roomsMessagesRef.current[props.selectedRoom_id].list.slice(-1)[0].senderId != props.userData._id && props.selectedRoomRecipientData.email)
            socket.emit('msgStatusToServer',{roomId: props.selectedRoom_id, senderEmail: props.selectedRoomRecipientData.email, type: 'seen', timestamp: Date.now(), receiverId: props.userData._id})
    }, [props.roomsMessagesRef.current,props.selectedRoom_id,props.selectedRoomRecipientData])

    return (
        <React.Fragment>
        <div className={"room"} style={{transform: `translate(${x}%,0px)`, gridTemplateRows: `55px auto ${inputHeight}`}}>
            <div className="background-image"></div>
            <div className={"roomHeader"}>
                <div className={"back"} onClick={() => goBack()}><i className="return" /></div>
                <div className="picContainer">
                    <ProfilePic />
                </div>
                <div className={"name"}>{props.selectedRoomRecipientData._id ? props.selectedRoomRecipientData.name : null}</div>
                <div className="videoCall" ><i className="video-call" /></div>
                <div className="audioCall" ><i className="call" /></div>
                <div className="menu-room"><i className="vertical-menu" /></div>
            </div>
            <div ref={MesssagesRef} className={"messages"} style={{height: `calc(100vh - ${offSetForMSGHeight}px)`}}>
                {
                    props.selectedRoom_id ? props.roomsMessagesRef.current[props.selectedRoom_id].list.map((obj, index) => {
                        messageOwnerChanged = lastMSGFrom === obj.senderId ? false : true
                        lastMSGFrom = obj.senderId
                        return (
                            <MsgBox key={index} userData={props.userData} selectedRoom_id={props.selectedRoom_id} obj={obj} messageOwnerChanged={messageOwnerChanged} seen={props.roomsMessagesRef.current[props.selectedRoom_id].seen}  received={props.roomsMessagesRef.current[props.selectedRoom_id].received}  sent={props.roomsMessagesRef.current[props.selectedRoom_id].sent}/>
                        )
                    }) : null
                }
            </div>
        </div>
        <div ref={inputRef} className={"create"} style={{transform: `translate(${createX}%,0px)`}}>
            <div className="chatInput">
                <div className="emoji"><i /></div>
                <ContentEditable innerRef={contentEditableRef} className="input" html={msgValueRef.current} onChange={handleChange} onFocus={() => {setTimeout(() => {
                    lastMSGIntoView()
                }, 1000);}}></ContentEditable>
                <div className="attachment"><i /></div>
                <div className="camera"><i /></div>
            </div>
            {/* <div className="microphone"><i /></div> */}
            <div className="send" onClick={() => sendMSG()}><i /></div>
        </div>
        </React.Fragment>
    )
}
