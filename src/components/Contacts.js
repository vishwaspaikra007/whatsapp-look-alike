// imported in AvailableChats.js to show all contacts
import React, {useState} from 'react'
import BackgroundClickAnimation from './BackgroundClickAnimation'
import {ReactComponent as Person} from '../assets/person.svg'

export default function Contacts(props) {

    const [clicked, setClicked] = useState(false)

    return (
        <div className="savedContacts">
            <span><Person className="Person"/></span>
            <div onClick={() => {props.openChatRoom(props.obj._id); setClicked(true)}}>
                <span>{props.obj.name}</span>
                <span>whatever</span>
            </div>
            <BackgroundClickAnimation  clicked={clicked} setClicked={boolean => setClicked(boolean)}/>
        </div>
    )
}
