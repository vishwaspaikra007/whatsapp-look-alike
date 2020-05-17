import React from 'react'
import "./ChatContainer.css"
import ProfilePic from './ProfilePic'
export default function ChatContainer(props) {
    const [name, date, lastMessage, tag] = ["Vishwas Paikra", "29/01/1998","good night"]
    return (
        <div className="ChatContainer">
            <ProfilePic />
            <div>
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
