import React, {useEffect, useState} from 'react'
import './Room.css'
import ProfilePic from './ProfilePic'
export default function Room(props) {
    const [x, setX] = useState(100)
    const [createX, setCreateX] = useState(100)
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

    return (
        <React.Fragment>
        <div className={"room"} style={{transform: `translate(${x}%,0px)`}}>
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
            <div className={"messages"}></div>
        </div>
        <div className={"create"} style={{transform: `translate(${createX}%,0px)`}}>
            <div className="chatInput">
                <div className="emoji"><i /></div>
                <input className="input" placeholder="Type a messsage"/>
                <div className="attachment"><i /></div>
                <div className="camera"><i /></div>
            </div>
            <div className="microphone"><i /></div>
        </div>
        </React.Fragment>
    )
}
