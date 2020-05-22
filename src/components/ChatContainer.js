import React from 'react'
import "./ChatContainer.css"
import ProfilePic from './ProfilePic'
export default function ChatContainer(props) {
    const [lastMessage, tag] = ["good night"]
    return (
        <div className="ChatContainer">
            <ProfilePic />
            <div onClick={() => props.setroomDetails(props.name)}>
                <div>
                    <div className="name">{props.name}</div>
                    <div className="date">{props.date}</div>
                </div>
                <div>
                    <div className="lastMessage">{lastMessage}</div>
                    <div className="tag">{tag}</div>
                </div>
            </div>
        </div>
    )
}
