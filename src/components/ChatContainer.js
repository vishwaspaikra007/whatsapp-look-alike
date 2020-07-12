import React, {useState, useEffect} from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import "./ChatContainer.css"
import ProfilePic from './ProfilePic'
import formatTime from './formatTime'
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser'
import BackgroundClickAnimation from './BackgroundClickAnimation'

export default function ChatContainer(props) {
    const [tag, setTag] = useState(undefined)
    const [date, setDate] = useState(undefined)
    const [clicked, setClicked] = useState(false)
    useEffect(() => {
        if(props.date) {
            setDate(formatTime(props.date))
    }})
    return (
        <div className="ChatContainer">
            <ProfilePic />
            <Router> 
                <Link to={"/whatsapp-look-alike/" + (props.name).replace(new RegExp(' ', 'g'), "-")}  onClick={() => {props.setSelectedRoomRecipientName(props.name); props.setSelectedRoom_id(props.roomId);setClicked(true)}}>
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
            <BackgroundClickAnimation clicked={clicked} setClicked={boolean => setClicked(boolean)}/>
        </div>
    )
}
