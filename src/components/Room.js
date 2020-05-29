import React, {useEffect, useState} from 'react'
import './Room.css'
import ProfilePic from './ProfilePic'
import {ReactComponent as Camera} from '../assets/camera.svg'
export default function Room(props) {
    const [x, setX] = useState(100)
    const [createX, setCreateX] = useState(100)
    useEffect(() => {
        if(props.roomDetails)
        {    
            setX(0)
            setCreateX(0)
        }
        else
        {    
            setX(100)
            setCreateX(100)
        }
    }, [props.roomDetails])

    const goBack =()=> {
        // props.setroomDetails(undefined)
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
                <div className={"name"}>{props.roomDetails}</div>
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
