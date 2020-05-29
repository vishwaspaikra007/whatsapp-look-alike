import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

import "./ChatContainer.css"
import ProfilePic from './ProfilePic'
export default function ChatContainer(props) {
    const [lastMessage, tag] = ["good night"]
    return (
        <div className="ChatContainer">
            <ProfilePic />
            <Router> 
                <Link to={"/" + (props.name).replace(" ", "-")}  onClick={() => props.setroomDetails(props.name)}>
                    <div>
                        <div className="name">{props.name}</div>
                        <div className="date">{props.date}</div>
                    </div>
                    <div>
                        <div className="lastMessage">{lastMessage}</div>
                        <div className="tag">{tag}</div>
                    </div>
                </Link>
            </Router>
        </div>
    )
}
