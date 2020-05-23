import React from 'react'
import './Room.css'
import './AvailableChats.css'
import {ReactComponent as AddGroup} from '../assets/addGroup.svg'
import {ReactComponent as Person} from '../assets/person.svg'

export default function AvailableChats(props) {
    let style = {
        transform: props.openAvailableChats ? `translate(0px,0px)` : `translate(100%,0px)` 
    }
    let m = ["Adam", "Alex", "Aaron", "Ben", "Carl", "Dan", "David", "Edward"]
    return (
        <div className="room AvailableChats" style={style}>
            <div className="menu">
                <div className={"s"} onClick={() => props.setOpenAvailableChats(false)}><i className="return" /></div>
                <div className="a">
                    <span>Select contact</span>
                    <span>0 contacts</span>
                </div>
                <div><i className="icon-search"></i></div>
                <div><i className="vertical-menu"></i></div>
            </div>
            <div className="contacts">
                <div className="newGroup">
                    <span><AddGroup className="AddGroup"/></span>
                    <p>New Group</p>
                </div>
                <div className="newGroup">
                    <span><AddGroup className="AddGroup"/></span>
                    <p>New Contact</p>
                </div>
                {
                    m.map(i => {
                        return (
                            <div className="savedContacts">
                                <span><Person className="Person"/></span>
                                <div>
                                    <span>{i}</span>
                                    <span>whatever</span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            
        </div>
    )
}
