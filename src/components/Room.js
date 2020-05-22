import React, {useEffect, useState} from 'react'
import './Room.css'
import ProfilePic from './ProfilePic'
import {ReactComponent as Camera} from '../assets/camera.svg'
export default function Room(props) {
    const [marginLeft, setMarginLeft] = useState("100%")
    useEffect(() => {
        if(props.roomDetails)
        {    
            setMarginLeft("0%")
        }
        else
        {    
            setMarginLeft("100%")
        }
    }, [props.roomDetails])
    return (
        <div className={"room"} style={{marginLeft: marginLeft}}>
            <div className="background-image"></div>
            <div className={"roomHeader"}>
                <div className={"back"} onClick={() => props.setroomDetails(undefined)}><i className="return" /></div>
                <div className="picContainer">
                    <ProfilePic />
                </div>
                <div className={"name"}>{props.roomDetails}</div>
                <div className="videoCall" ><i className="video-call" /></div>
                <div className="audioCall" ><i className="call" /></div>
                <div className="menu-room"><i className="vertical-menu" /></div>
            </div>
            <div className={"messages"}></div>
            <div className={"create"}>
                <div className="chatInput">
                    <div className="emoji"><i /></div>
                    <input className="input" placeholder="Type a messsage"/>
                    <div className="attachment"><i /></div>
                    <div className="camera"><i /></div>
                </div>
                <div className="microphone"><i /></div>
            </div>
        </div>
    )
}
