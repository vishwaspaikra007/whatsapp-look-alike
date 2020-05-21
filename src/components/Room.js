import React from 'react'
import './Room.css'
import ProfilePic from './ProfilePic'
export default function Room() {
    return (
        <div className={"room"}>
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
            <div className={"messages"} />
            <div className={"create"} />
        </div>
    )
}
