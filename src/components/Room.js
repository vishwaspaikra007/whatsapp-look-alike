import React from 'react'
import './Room.css'
import ProfilePic from './ProfilePic'
import {ReactComponent as Camera} from '../assets/camera.svg'
export default function Room() {
    return (
        <div className={"room"}>
            <div className="background-image"></div>
            <div className={"roomHeader"}>
                <div className={"back"}><i className="return" /></div>
                <div className="picContainer">
                    <ProfilePic />
                </div>
                <div className={"name"}>Vishwas Paikra</div>
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
