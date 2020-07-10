import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './Room.css'
import './AvailableChats.css'
import {ReactComponent as AddGroup} from '../assets/addGroup.svg'
import socket from './socket.io-clientConfig'
import Contacts from './Contacts'
import BackgroundClickAnimation from './BackgroundClickAnimation'

export default function AvailableChats(props) {

    const [clicked, setClicked] = useState(false)
    const [email, setEmail] = useState(undefined)
    const [createRoom, setCreateRoom] = useState(false)
    const [contacts, setContacts] = useState([])
    const createRoomAddress = props.production ? 'https://vishwas-auth.herokuapp.com/createRoom' : 'http://localhost:3000/createRoom'

    const getContactsAddress = props.production ? 'https://vishwas-auth.herokuapp.com/getContacts' : 'http://localhost:3000/getContacts'

    const sortAndSetArrayElement = (contact)=> {
        setContacts(contacts.concat(contact).sort((obj1, obj2) => obj1.name < obj2.name))
    }

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
                    if(result.data.roomCreated) {
                        console.log(result)
                        setEmail(undefined)
                        setCreateRoom(false)
                        const modifiedContact = {
                            lastMessageData: result.data.msgData,
                            ...result.data.contact
                        }
                        props.setContacts(props.contacts.concat(modifiedContact))
                        sortAndSetArrayElement(result.data.contact)

                        let modifiedRoomsMessages = JSON.parse(JSON.stringify(props.roomsMessages))
                        modifiedRoomsMessages[result.data.contact.chatRoomId] = [result.data.msgData]
                        props.setRoomsMessages(modifiedRoomsMessages)

                        socket.emit('joinRoom', result.data.contact.chatRoomId)
                        return null
                    }
                    alert(result.data.msg)
                    console.log(result.data.msg)
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
            const {contacts, roomsMessages} = result.data
            console.log("get contacts", result)
            setContacts(contacts)
            let modifiedContacts = contacts.map(obj => {
                obj['lastMessageData'] = roomsMessages[obj._id][roomsMessages[obj._id].length - 1]
                return obj
            })
            console.log('modifiedContacts', modifiedContacts)
            props.setContacts(modifiedContacts)
            props.setRoomsMessages(result.data.roomsMessages)
            props.setUserData(result.data.userData)
            contacts.map(obj => {
                socket.emit('joinRoom',obj._id)
            })
        })
    }, [])

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
                    <span>{contacts.length} contacts</span>
                </div>
                <div><i className="icon-search"></i></div>
                <div><i className="vertical-menu"></i></div>
            </div>
            <div className="contacts">
                <div className="newGroup">
                    <span><AddGroup className="AddGroup"/></span>
                    <p>New Group</p>
                </div>
                <div className="newGroup" onClick={() => {setClicked(true);setCreateRoom(true)}}>
                    <span><AddGroup className="AddGroup"/></span>
                    <p>New Contact</p>
                    <BackgroundClickAnimation  clicked={clicked} setClicked={boolean => setClicked(boolean)}/>
                </div>
                {
                    contacts.map((obj, index) => {
                        return (
                            <Contacts key={index} obj={obj} openChatRoom={id => openChatRoom(id)}/>
                        )
                    })
                }
            </div>
            
        </div>
    )
}
