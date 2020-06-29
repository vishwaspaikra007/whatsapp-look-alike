import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './Room.css'
import './AvailableChats.css'
import {ReactComponent as AddGroup} from '../assets/addGroup.svg'
import {ReactComponent as Person} from '../assets/person.svg'

export default function AvailableChats(props) {

    const [email, setEmail] = useState(undefined)
    const [createRoom, setCreateRoom] = useState(false)
    const [contacts, setContacts] = useState([])

    const createRoomAddress = props.production ? 'https://vishwas-auth.herokuapp.com/createRoom' : 'http://localhost:3000/createRoom'

    const getContactsAddress = props.production ? 'https://vishwas-auth.herokuapp.com/getContacts' : 'http://localhost:3000/getContacts'

    const saveContact = ()=> {
        if(email)
        {
            let data = {}
            data.email = email
            if(email !== props.email) {
                axios.post(createRoomAddress,data)
                .then(result => {
                    if(props.reAuthorizationCheckAndConfig(result)) {
                        saveContact()
                        return null
                    }
                    if(result.data.err) {
                        alert(result.data.msg)
                    }
                    console.log(result)
                    setEmail(undefined)
                    setCreateRoom(false)
                    // setEmail(undefined)
                })
            } else {
                alert(email + " is your email")
                setEmail(undefined)
                setCreateRoom(false)
            }
            
        } else {
            console.log("email is not defined")
            setCreateRoom(false)
        }
    }

    useEffect(() => {
        saveContact()
    }, [email])

    useEffect(() => {
        if(!email && createRoom)
            setEmail(prompt("Enter email to save contact"))
    }, [createRoom])

    let style = {
        transform: props.openAvailableChats ? `translate(0px,0px)` : `translate(100%,0px)` 
    }

    useEffect(() => {
        axios.post(getContactsAddress).then(result => {
            setContacts(result.data)
        })
    }, [])
    let m = ["Adam", "Alex", "Aaron", "Ben", "Carl", "Dan", "David", "Edward"]

    const closeAvailableChats = ()=> {
        // props.setOpenAvailableChats(false)
        window.history.back()   
    }

    const openChatRoom = ()=> {

    }

    return (
        <div className="room AvailableChats" style={style}>
            <div className="menu">
                <div className={"s"} onClick={() => closeAvailableChats()}><i className="return" /></div>
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
                <div className="newGroup" onClick={() => setCreateRoom(true)}>
                    <span><AddGroup className="AddGroup"/></span>
                    <p>New Contact</p>
                </div>
                {
                    contacts.map((obj, index) => {
                        return (
                            <div key={index} className="savedContacts">
                                <span><Person className="Person"/></span>
                                <div onClick={() => openChatRoom(obj._id)}>
                                    <span>{obj.name}</span>
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
