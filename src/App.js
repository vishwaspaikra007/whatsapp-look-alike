import React, { useState, useEffect, useRef } from 'react';
import { createBrowserHistory } from 'history'
import axios from 'axios'
import './App.css';
import SocketConnections from './components/SocketConnections'
import Header from './components/header'
import Body from './components/Body';
import MenuContainer from './components/MenuContainer';
import Room from './components/Room';
import Block from './components/Block';
import DirectAccess from './components/DirectAccess';
import AvailableChats from './components/AvailableChats';
import WelcomePage from './components/WelcomePage';
import EnterEmail from './components/EnterEmail';
import EnterNameAndDp from './components/EnterNameAndDp';
import socket from './components/socket.io-clientConfig'
import config from './components/config'

function App() {

  const [bodyRef, setBodyRef] = useState(null)
  const [scrollX, setScrollX] = useState(0)
  const [marginLeft, setMarginLeft] = useState(10)
  const [showMenu, setMenu] = useState(false)
  const [menuClass, setMenuClass] = useState('menuCard')
  const [chatsRefForBody, setchatsRefForBody] = useState()
  const [marginTop, setMarginTop] = useState(0)
  const [headerRef, setHeaderRef] = useState()
  const [agreed, setAgreed] = useState(false)
  const [registered, setRegistered] = useState(false)
  const [accessJWTTokken, setAccessJWTTokken] = useState(undefined)
  //to send open room chat data
  const [selectedRoomRecipientData, setselectedRoomRecipientData] = useState({})
  const [selectedRoom_id, setSelectedRoom_id] = useState(undefined)
  const [userData, setUserData] = useState({})
  // open available chats
  const [openAvailableChats, setOpenAvailableChats] = useState(false)

  const [email, setEmail] = useState(undefined)
  const [PWD, setPWD] = useState(undefined)
  const [contacts, setContacts] = useState([])
  const [roomsMessages, setRoomsMessages] = useState([])
  const [newMSGCount, setNewMSGCount] = useState({})

  const openAvailableChatsRef = useRef(openAvailableChats)
  const selectedRoomRecipientDataRef = useRef(selectedRoomRecipientData)
  let history = createBrowserHistory()
  const bodyDRef = useRef(bodyRef)
  const roomsMessagesRef = useRef()
  const contactsRef = useRef()
  const isURLSet = useRef(false)
  const newMSGCountRef = useRef(newMSGCount)
  const scrollTo = (i) => {
    bodyDRef.current.style.scrollSnapType = "none"
    let scrollAnime;

    if (scrollAnime)
      clearInterval(scrollAnime)

    let start = bodyDRef.current.scrollLeft
    const end = i * bodyDRef.current.clientWidth
    const distance = end - start
    const pix = distance / 5
    let check = 0;

    if (bodyDRef.current) {
      scrollAnime = setInterval(() => {
        start += pix
        setScrollX(start)
        check += pix
        if (Math.abs(check) >= Math.abs(distance)) {
          clearInterval(scrollAnime)
          bodyDRef.current.style.scrollSnapType = "x mandatory"
          if (bodyDRef.current.scrollLeft == 0) {
          }
        }
      }, 1);

    }

  }
  useEffect(() => {

    if (bodyDRef.current) {

      const scrollLeft = Math.round(bodyDRef.current.scrollLeft)
      const clientWidth = Math.round(document.documentElement.clientWidth)
      const pathname = window.location.pathname
      const isRootPath = pathname.match('whatsapp-look-alike/chats')

      if (scrollLeft == clientWidth && !pathname.match('status')) {

        console.log('status')
        if (isRootPath) {
          history.push("/whatsapp-look-alike/status")
        } else {
          history.replace('/whatsapp-look-alike/status')
        }

      }
      else if (scrollLeft == clientWidth * 2 && !pathname.match('calls')) {

        console.log('calls')
        if (isRootPath) {
          history.push("/whatsapp-look-alike/calls")
        } else {
          history.replace('/whatsapp-look-alike/calls')
        }
      }
      else if (scrollLeft == 0 && !isRootPath) {
        console.log("chats")
        history.goBack()
      }
    }
  }, [marginLeft])

  useEffect(() => {
    if (bodyRef)
      bodyRef.scrollTo(scrollX, 0)
  }, [scrollX, bodyRef])

  useEffect(() => {
    bodyDRef.current = bodyRef
    if (bodyRef) {
      bodyRef.addEventListener('scroll', e => {
        setMarginLeft(10 + (bodyRef.scrollLeft / bodyRef.scrollWidth) * 90)
      })
    }
    // on component unmount so it doesnt update unnecessarily
    return () => {
      if (bodyRef)
        bodyRef.removeEventListener('scroll')
    }
  }, [bodyRef])

  useEffect(() => {
    if (showMenu)
      setMenuClass("menuCardFull")
    else
      setMenuClass(" ")
  }, [showMenu])

  useEffect(() => {
    if (chatsRefForBody && headerRef) {
      //called only once
      let lastScrolledTopValue
      let scrolled = 0
      let scrollTimer
      chatsRefForBody.addEventListener('scroll', e => {
        if (scrollTimer)
          clearTimeout(scrollTimer)
        headerRef.style.transition = "0ms"
        if (!lastScrolledTopValue)
          lastScrolledTopValue = chatsRefForBody.scrollTop

        scrolled += lastScrolledTopValue - chatsRefForBody.scrollTop
        if (scrolled < -60)
          scrolled = - 60
        else if (scrolled > 0)
          scrolled = 0
        setMarginTop(scrolled)
        scrollTimer = setTimeout(() => {
          headerRef.style.transition = "transform 300ms ease-in-out"
          if (scrolled < -30 && chatsRefForBody.scrollTop > 60)
            scrolled = -60
          else
            scrolled = 0
          setMarginTop(scrolled)
        }, 300);
        lastScrolledTopValue = chatsRefForBody.scrollTop
      })
    }
    return () => {
      if (chatsRefForBody)
        chatsRefForBody.removeEventListener('scroll')
    }
  }, [chatsRefForBody, headerRef])


  useEffect(() => {
    if (headerRef && bodyRef) {
      if (selectedRoomRecipientData._id || openAvailableChats) {
        headerRef.style.transform = `translate(-100px,${marginTop}px)`
        bodyRef.style.transform = "translate(-100px,0px)"
      }
      else {
        headerRef.style.transform = `translate(0px,${marginTop}px)`
        bodyRef.style.transform = "translate(0px,0px)"
      }
    }
  }, [selectedRoomRecipientData, openAvailableChats])

  const checkURLAndSetAppState = ()=> {
    isURLSet.current = true
    let isReloaded
    if (window.performance) {
      console.info("window.performance works fine on this browser");
      isReloaded =  (performance.navigation.type == 1) ? true : false
      console.log("reloaded ", isReloaded)
    }

    const pathname = window.location.pathname
    if(pathname.match(/whatsapp-look-alike\/*$/))
      history.replace('/whatsapp-look-alike/chats')
    else if(pathname.match(/whatsapp-look-alike\/status\/*$/)) {
      scrollTo(1)
      if(!isReloaded) {
        history.replace('/whatsapp-look-alike/chats')
        history.push('/whatsapp-look-alike/status')
      }
    } else if(pathname.match(/whatsapp-look-alike\/calls\/*$/)) {
      scrollTo(2)
      if(!isReloaded) {
        history.replace('/whatsapp-look-alike/chats')
        history.push('/whatsapp-look-alike/calls')
      }
    } else if(pathname.match(/whatsapp-look-alike\/select-contact-for-chatting\/*$/)) {
      setOpenAvailableChats(true)
      if(!isReloaded) {
        history.replace('/whatsapp-look-alike/chats')
        history.push('/whatsapp-look-alike/select-contact-for-chatting')
      }
    } else if(!pathname.match(/whatsapp-look-alike\/chats\/*$/) || pathname.match(/whatsapp-look-alike\/*/g).length > 1)
    {
      isReloaded ? history.goBack() : history.replace('/whatsapp-look-alike/chats')
    }
    console.log("if page is loading continuosly than write the folowing path after url 'whatsapp-look-alike/chats'")
  }

  useEffect(() => {
    if(bodyDRef.current && !isURLSet.current)
      checkURLAndSetAppState()
  }, [bodyDRef.current])

  useEffect(() => {
    window.addEventListener('popstate', () => {
      console.log(window.location.pathname)
      let a = !(openAvailableChatsRef.current || selectedRoomRecipientDataRef.current._id)
      if (window.location.pathname.match('whatsapp-look-alike/chats') && a) {
        scrollTo(0)
      }
      setselectedRoomRecipientData({})
      setOpenAvailableChats(false)
    })
  }, [])

  useEffect(() => {
    openAvailableChatsRef.current = openAvailableChats
    selectedRoomRecipientDataRef.current = selectedRoomRecipientData
  }, [selectedRoomRecipientData, openAvailableChats])


  // const connectSocket = () => {
  //   socket.on('msgFromServer', data => {
  //     console.log(data)
  //     let newRoomsMessages = JSON.parse(JSON.stringify(roomsMessagesRef.current))
  //     newRoomsMessages[data.roomId].push(data.msgData)
  //     setRoomsMessages(newRoomsMessages)
  //   })
  // }

  useEffect(() => {
    roomsMessagesRef.current = roomsMessages
  }, [roomsMessages])

  useEffect(() => {
    contactsRef.current = contacts
  }, [contacts])

  const authorize = () => {
    console.log("called for refresh token")
    const authorizeAddress = config.production ? config.server + '/refreshToken' : 'http://localhost:3000/refreshToken'
    axios.get(authorizeAddress, { withCredentials: true })
      .then(result => {
        console.log("called for refresh token")
        if (result.data.logedIn) {
          console.log("logged in")
          setAccessJWTTokken(result.data.signedJWT)
          setEmail(result.data.email)
          setPWD("userPassword")
          setRegistered(true)
          setAgreed(true)
          // connectSocket()
        } else {
          alert(result.data.msg)
        }
      }).catch(err => [
        console.log(err + " login again")
      ])
  }

  useEffect(() => {
    authorize()
  }, [])

  const reAuthorizationCheckAndConfig = (result) => {
    if (result.data.logedIn === true) {
      setAccessJWTTokken(result.data.signedJWT)
      return true
    } else if (result.data.logedIn === false) {
      alert(result.data.msg)
      setEmail(undefined)
      setPWD(undefined)
      setAccessJWTTokken(undefined)
      setRegistered(false)
    } else {
      return false
    }
  }

  useEffect(() => {
    console.log(roomsMessages)
    setContacts(contacts.map(obj => {
      obj['lastMessageData'] = roomsMessages[obj._id].list[roomsMessages[obj._id].list.length - 1]
      obj.seen = roomsMessages[obj._id].seen
      obj.received = roomsMessages[obj._id].received
      obj.sent = roomsMessages[obj._id].sent
      return obj
    }))
  }, [roomsMessages])

  useEffect(() => {
    // console.log("new message", newMSGCount)
    newMSGCountRef.current = newMSGCount
    // console.log("new message", newMSGCountRef.current) 
    setContacts(contacts.map(obj => {
      if(selectedRoomRecipientData._id == obj.recipientId && obj.newMSGCount != 0) {
        obj.newMSGCount = 0
        const modifiedNewMsgCount = JSON.parse(JSON.stringify(newMSGCountRef.current))
        modifiedNewMsgCount[obj._id] = 0
        setNewMSGCount(modifiedNewMsgCount)
      }
      else 
        obj.newMSGCount = newMSGCountRef.current[obj._id] 
      return obj
    }))
  }, [newMSGCount])

  useEffect(() => {
    if(selectedRoom_id && Object.keys(newMSGCountRef.current).length) {
      let modifiedNewMsgCount = JSON.parse(JSON.stringify(newMSGCountRef.current))
      modifiedNewMsgCount[selectedRoom_id] = 0
      console.log("new message", modifiedNewMsgCount)
      setNewMSGCount(modifiedNewMsgCount)
    }
  }, [selectedRoom_id])

  return (
    <div className="App">

      {agreed ? <React.Fragment>
        {(email && PWD) ?
          <React.Fragment>
            {registered && accessJWTTokken ? null : <EnterNameAndDp accessJWTTokken={accessJWTTokken} setAccessJWTTokken={accessJWTTokken => setAccessJWTTokken(accessJWTTokken)} setRegistered={registered => setRegistered(registered)} email={email} PWD={PWD} setPWD={pwd => setPWD(pwd)} />}
          </React.Fragment>
          : <EnterEmail accessJWTTokken={accessJWTTokken} setAccessJWTTokken={accessJWTTokken => setAccessJWTTokken(accessJWTTokken)} registered={registered} setRegistered={registered => setRegistered(registered)} setEmail={email => setEmail(email)} setPWD={PWD => setPWD(PWD)} />}
      </React.Fragment>
        : <WelcomePage setAgreed={agreed => setAgreed(agreed)} />}

      {registered && accessJWTTokken ? <React.Fragment>

        <SocketConnections roomsMessagesRef={roomsMessagesRef} setRoomsMessages={roomsMessages => setRoomsMessages(roomsMessages)} email={email} contactsRef={contactsRef} setContacts={contacts => setContacts(contacts)} _id={userData._id} newMSGCountRef={newMSGCountRef} setNewMSGCount={newMSGCount => setNewMSGCount(newMSGCount)}/>

        <Header setHeaderRefInApp={ref => setHeaderRef(ref.current)} scrollTo={scrollTo} marginLeft={marginLeft} openMenu={val => setMenu(val)} y={marginTop} accessJWTTokken={accessJWTTokken} />

        <Body shareRef={ref => setBodyRef(ref.current)} setchatsRefForBody={chatsRef => setchatsRefForBody(chatsRef.current)} scrolled={marginTop} setselectedRoomRecipientData={selectedRoomRecipientData => setselectedRoomRecipientData(selectedRoomRecipientData)} setSelectedRoom_id={selectedRoom_id => setSelectedRoom_id(selectedRoom_id)} contacts={contacts} userData={userData}/>

        {
          showMenu ? <MenuContainer openMenu={val => setMenu(val)} menuClass={menuClass} /> : null
        }

        <DirectAccess setOpenAvailableChats={bool => setOpenAvailableChats(bool)} />

        <Room userData={userData} selectedRoomRecipientData={selectedRoomRecipientData} setselectedRoomRecipientData={selectedRoomRecipientData => setselectedRoomRecipientData(selectedRoomRecipientData)} selectedRoom_id={selectedRoom_id} setSelectedRoom_id={selectedRoom_id => setSelectedRoom_id(selectedRoom_id)} roomsMessagesRef={roomsMessagesRef} setRoomsMessages={roomsMessages => setRoomsMessages(roomsMessages)}/>

        <AvailableChats openAvailableChats={openAvailableChats} setOpenAvailableChats={bool => setOpenAvailableChats(bool)} email={email} reAuthorizationCheckAndConfig={result => reAuthorizationCheckAndConfig(result)} setContacts={contacts => setContacts(contacts)} setRoomsMessages={rooms => setRoomsMessages(rooms)} setUserData={userData =>
         setUserData(userData)} contacts={contacts} roomsMessages={roomsMessages} setNewMSGCount={newMSGCount => setNewMSGCount(newMSGCount)}/>

        <Block blockStyle={(selectedRoomRecipientData._id || openAvailableChats) ? { zIndex: 2, opacity: 0.6 } : { zIndex: -2, opacity: 0 }} />

      </React.Fragment> : null
      }

    </div>
  );
}

export default App;
