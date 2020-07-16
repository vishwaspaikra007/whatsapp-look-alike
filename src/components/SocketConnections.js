import React, {useEffect} from 'react'
import socket from './socket.io-clientConfig'
import styles from './SocketConnections.module.css'

export default function SocketConnections(props) {

  const connectSocket = () => {
    console.log("socket connection established")

    socket.on('msgFromServer', data => {
      console.log(data)
      let newRoomsMessages = JSON.parse(JSON.stringify(props.roomsMessagesRef.current))
      newRoomsMessages[data.roomId].push(data.msgData)
      props.setRoomsMessages(newRoomsMessages)
    })

    socket.on('newChat', data => {
      console.log(data)
      socket.emit('joinRoom', data.contact._id)

      props.setContacts(props.contactsRef.current.concat(data.contact))

      let newRoomsMessages = JSON.parse(JSON.stringify(props.roomsMessagesRef.current))
      newRoomsMessages[data.contact._id] = [data.contact.lastMessageData]
      props.setRoomsMessages(newRoomsMessages)

    })

    socket.emit('joinRoom', props.email)
  }

  useEffect(() => {
    connectSocket()
  }, [])
  return (
    <div className={styles.socketMSG}>
      Socket Connected..
    </div>
  )
}
