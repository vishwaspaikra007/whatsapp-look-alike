import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

import {ReactComponent as CreateChat} from '../assets/createChat.svg'
import './DirectAccess.css'

export default function DirectAccess(props) {
    return (
        <Router>
            <Link to="/whatsapp-look-alike/select-contact-for-chatting"  className="directAccess">
                <CreateChat className="createChat" onClick={() => props.setOpenAvailableChats(true)}/>
            </Link>
        </Router>
    )
}
