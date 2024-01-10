import React, {useEffect} from 'react'
import socket from './socket.io-clientConfig'
import styles from './SocketConnections.module.css'

export default function SocketConnections(props) {

  const connectSocket = () => {
    socket.emit('joinRoom', props.email)

    socket.on('msgFromServer', data => {
      console.log(data)
      let newRoomsMessages = JSON.parse(JSON.stringify(props.roomsMessagesRef.current))
      newRoomsMessages[data.roomId].list.push(data.msgData)
      props.setRoomsMessages(newRoomsMessages)
      // alert('received')
      const modifiedNewMsgCount = JSON.parse(JSON.stringify(props.newMSGCountRef.current))
      console.log("modifiedNewMsgCount", modifiedNewMsgCount)
      modifiedNewMsgCount[data.roomId]++ 

      props.setNewMSGCount(modifiedNewMsgCount)
      
      socket.emit('msgStatusToServer',{roomId: data.roomId, senderId: data.msgData.senderId, type: 'received', timestamp: Date.now()})

    })

    socket.on('newChat', data => {
      console.log(data)
      socket.emit('joinRoom', data.contact._id)

      props.setContacts(props.contactsRef.current.concat(data.contact))

      let newRoomsMessages = JSON.parse(JSON.stringify(props.roomsMessagesRef.current))
      newRoomsMessages[data.contact._id] = {}
      newRoomsMessages[data.contact._id].list = [data.contact.lastMessageData]
      props.setRoomsMessages(newRoomsMessages)

    })

    socket.on('msgStatus', data => {
      // alert('new msg status',data)
      const roomsMessages = JSON.parse(JSON.stringify(props.roomsMessagesRef.current))
      if(roomsMessages[data.roomId]) {
        roomsMessages[data.roomId][data.type] = data.timestamp 
        props.setRoomsMessages(roomsMessages)
      }
    })

    console.log("socket connection established")

  }

  useEffect(() => {
    connectSocket()
  }, [])

  useEffect(() => {
      if(props._id)
        socket.emit('joinRoom', props._id)
  }, [props._id])
  return (
    <div className={styles.socketMSG}>
      Socket Connected..
    </div>
  )
}
