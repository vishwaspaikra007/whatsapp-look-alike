import React from 'react'
import {ReactComponent as CreateChat} from '../assets/createChat.svg'
import './DirectAccess.css'
export default function DirectAccess(props) {
    return (
        <div className="directAccess">
            <CreateChat className="createChat" onClick={() => props.setOpenAvailableChats(true)}/>
        </div>
    )
}
