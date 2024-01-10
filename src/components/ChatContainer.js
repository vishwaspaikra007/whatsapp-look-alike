import React, {useState, useEffect} from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import "./ChatContainer.css"
import ProfilePic from './ProfilePic'
import formatTime from './formatTime'
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser'
import BackgroundClickAnimation from './BackgroundClickAnimation'
import MsgStatus from './MsgStatus'

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
                <Link to={"/whatsapp-look-alike/" + (props.name).replace(new RegExp(' ', 'g'), "-")}  onClick={() => {props.setselectedRoomRecipientData({_id: props.recipientId, name: props.name, email: props.email}); props.setSelectedRoom_id(props.roomId);setClicked(true)}}>
                    <div>
                        <div className="name">{props.name}</div>
                        <div className={["date", props.newMSGCount ? "newMSGColor" : null].join(" ") }>{date}</div>
                    </div>
                    <div>
                        <div className="lastMessage">
                            {
                                props.userData._id == props.senderId ? <MsgStatus seen={props.seen} received={props.received} sent={props.sent} msgTimestamp={props.date} newMSGCount={props.newMSGCount}/> : null
                            }
                            <span style={{paddingLeft: "5px"}}>{props.lastMessage.replace(/<\/*div>/g," ")}</span>
                        </div>
                        <div className="tag">
                            {props.newMSGCount ? <div className={'newMSG'}>{props.newMSGCount}</div> : null}
                        </div>
                    </div>
                </Link>
            </Router>
            <BackgroundClickAnimation clicked={clicked} setClicked={boolean => setClicked(boolean)}/>
        </div>
    )
}
