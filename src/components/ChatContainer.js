import React, {useState, useEffect} from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import "./ChatContainer.css"
import ProfilePic from './ProfilePic'

export default function ChatContainer(props) {
    const [tag, setTag] = useState(undefined)
    const [date, setDate] = useState(undefined)

    useEffect(() => {
        if(props.date) {
            const timeElapsed = Date.now() - new Date(props.date).getTime()
            const daysPassed = (timeElapsed/100*60*60*24)
            if(daysPassed >= 2) {
                let date = new Date(props.date).getDate() 
                date = date / 10 >= 1 ? date : '0' + date  
                let month = new Date(props.date).getMonth()
                month = month / 10 >= 1 ? month : '0' + month  
                const year = new Date(props.date).getFullYear()
                setDate(`${date}/${month}/${year}`)
            } else if(daysPassed >= 1) {
                setDate('Yesterday')
            } else {
                const hrs = new Date(props.date).getHours()
                const min = new Date(props.date).getMinutes()
                const amOrPm = hrs/12 > 1 ? 'am' : 'pm'
                setDate(hrs + '/' + min + '/' + amOrPm)
            }
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
                        <div className="lastMessage">{props.lastMessage}</div>
                        <div className="tag">{tag}</div>
                    </div>
                </Link>
            </Router>
        </div>
    )
}
