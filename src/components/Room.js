import React, {useEffect, useState, useRef} from 'react'
import './Room.css'
import ProfilePic from './ProfilePic'
import socket from './socket.io-clientConfig'
import ContentEditable from 'react-contenteditable'
import formatTime from './formatTime'
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser'

export default function Room(props) {
    const [x, setX] = useState(100)
    const [createX, setCreateX] = useState(100)
    const [inputHeight, setInputHeight] = useState("60px")
    const [offSetForMSGHeight, setOffSetForMSGHeight] = useState(115)
    const inputRef = useRef()
    const MesssagesRef = useRef()

    const msgValueRef = useRef("")
    let lastMSGFrom
    let messageOwnerChanged = false
    useEffect(() => {
        console.log('props.selectedRoom_id', props.selectedRoom_id)
        if(props.selectedRoomRecipientName)
        {    
            setX(0)
            setCreateX(0)
        }
        else
        {    
            setX(100)
            setCreateX(100)
        }
    }, [props.selectedRoomRecipientName])

    const goBack =()=> {
        props.setSelectedRoomRecipientName(undefined)
        props.setSelectedRoom_id(undefined)
        window.history.back()
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
                roomId: props.selectedRoom_id
            })
            let roomsMessages = JSON.parse(JSON.stringify(props.roomsMessages))
            roomsMessages[props.selectedRoom_id].push(msgData)
            console.log('roomsMessages', roomsMessages)
            props.setRoomsMessages(roomsMessages)
            msgValueRef.current = ""
            MesssagesRef.current.scrollTo(0, MesssagesRef.current.scrollHeight)
        }
    }

    useEffect(() => {
        MesssagesRef.current.scrollTo(0, MesssagesRef.current.scrollHeight)
    }, [props.roomsMessages,x])

    const handleChange = e => {
        msgValueRef.current = e.target.value
        console.log(msgValueRef.current, "inputHeight", inputHeight)
        setInputHeight(inputRef.current.clientHeight + 15 + "px")
        setOffSetForMSGHeight(inputRef.current.clientHeight + 70)
    }
    return (
        <React.Fragment>
        <div className={"room"} style={{transform: `translate(${x}%,0px)`, gridTemplateRows: `55px auto ${inputHeight}`}}>
            <div className="background-image"></div>
            <div className={"roomHeader"}>
                <div className={"back"} onClick={() => goBack()}><i className="return" /></div>
                <div className="picContainer">
                    <ProfilePic />
                </div>
                <div className={"name"}>{props.selectedRoomRecipientName}</div>
                <div className="videoCall" ><i className="video-call" /></div>
                <div className="audioCall" ><i className="call" /></div>
                <div className="menu-room"><i className="vertical-menu" /></div>
            </div>
            <div ref={MesssagesRef} className={"messages"} style={{height: `calc(100vh - ${offSetForMSGHeight}px)`}}>
                {
                    props.selectedRoom_id ? props.roomsMessages[props.selectedRoom_id].map((obj, index) => {
                        messageOwnerChanged = lastMSGFrom === obj.senderId ? false : true
                        lastMSGFrom = obj.senderId
                        return (
                            <div key={index} className={['msgBox ', obj.senderId === props.userData._id ? 'sent' : obj.senderId === 'bot1' ? 'bot1' : 'received', messageOwnerChanged ? 'marginTop' : null].join(' ')}>
                                <div>{ReactHtmlParser(obj.msg)}</div>
                                <div>{formatTime(obj.timestamp)}</div>
                            </div> 
                        )
                    }) : null
                }
            </div>
        </div>
        <div ref={inputRef} className={"create"} style={{transform: `translate(${createX}%,0px)`}}>
            <div className="chatInput">
                <div className="emoji"><i /></div>
                <ContentEditable className="input" html={msgValueRef.current} onChange={handleChange}></ContentEditable>
                <div className="attachment"><i /></div>
                <div className="camera"><i /></div>
            </div>
            {/* <div className="microphone"><i /></div> */}
            <div className="send" onClick={() => sendMSG()}><i /></div>
        </div>
        </React.Fragment>
    )
}
