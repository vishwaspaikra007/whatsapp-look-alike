import React, {useState, useEffect} from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import "./ChatContainer.css"
import ProfilePic from './ProfilePic'
import formatTime from './formatTime'
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser'

export default function ChatContainer(props) {
    const [tag, setTag] = useState(undefined)
    const [date, setDate] = useState(undefined)

    useEffect(() => {
        if(props.date) {
            setDate(formatTime(props.date))
    }})
    return (
        <div className="ChatContainer">
            <ProfilePic />
            <Router> 
                <Link to={"/" + (props.name).replace(new RegExp(' ', 'g'), "-")}  onClick={() => {props.setSelectedRoomRecipientName(props.name); props.setSelectedRoom_id(props.roomId)}}>
                    <div>
                        <div className="name">{props.name}</div>
                        <div className="date">{date}</div>
                    </div>
                    <div>
                        <div className="lastMessage">{ReactHtmlParser(props.lastMessage)}</div>
                        <div className="tag">{tag}</div>
                    </div>
                </Link>
            </Router>
        </div>
    )
}
