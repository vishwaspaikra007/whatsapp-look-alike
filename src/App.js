import React, { useState, useEffect, useRef } from 'react';
import { createBrowserHistory } from 'history'
import axios from 'axios'
import './App.css';
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
function App() {

  const [bodyRef, setBodyRef] = useState(null)
  const [scrollX, setScrollX] = useState(0)
  const [marginLeft, setMarginLeft] = useState(10)
  const [showMenu, setMenu] = useState(false)
  const [menuClass, setMenuClass] = useState('menuCard')
  const [chatsRefForBody, setchatsRefForBody] = useState()
  const [marginTop, setMarginTop] = useState(0)
  const [headerRef, setHeaderRef] = useState()
  const [passedFromStatus, setPassedFromStatus] = useState(false)
  const [passedFromCalls, setPassedFromCalls] = useState(false)
  const [clickedFromApp, setClickedFromApp] = useState(true)
  const [agreed, setAgreed] = useState(false)
  const [registered, setRegistered] = useState(false)
  const [accessJWTTokken, setAccessJWTTokken] = useState(undefined)
  const [production, setProduction] = useState(false)
  //to send open room chat data
  const [selectedRoomRecipientName, setSelectedRoomRecipientName] = useState(undefined)
  const [selectedRoom_id, setSelectedRoom_id] = useState(undefined)
  const [userData, setUserData] = useState({})
  // open available chats
  const [openAvailableChats, setOpenAvailableChats] = useState(false)

  const [email, setEmail] = useState(undefined)
  const [PWD, setPWD] = useState(undefined)
  const [contacts, setContacts] = useState([])
  const [roomsMessages, setRoomsMessages] = useState([])

  const clickedFromAppRef = useRef(clickedFromApp)
  const passedFromCallsRef = useRef(passedFromCalls)
  const passedFromStatusRef = useRef(passedFromStatus)
  const openAvailableChatsRef = useRef(openAvailableChats)
  const selectedRoomRecipientNameRef = useRef(selectedRoomRecipientName)
  let history = createBrowserHistory()
  const bodyDRef = useRef(bodyRef)
  const changedRef = useRef(true)
  const roomsMessagesRef = useRef()
  //to generate random names

  let names = ["Adam", "Alex", "Aaron", "Ben", "Carl", "Dan", "David", "Edward", "Fred", "Frank", "George", "Hal", "Hank", "Ike", "John", "Jack", "Joe", "Larry", "Monte", "Matthew", "Mark", "Nathan", "Otto", "Paul", "Peter", "Roger", "Roger", "Steve", "Thomas", "Tim", "Ty", "Victor", "Walter"]
  let lnames = ["Anderson", "Ashwoon", "Aikin", "Bateman", "Bongard", "Bowers", "Boyd", "Cannon", "Cast", "Deitz", "Dewalt", "Ebner", "Frick", "Hancock", "Haworth", "Hesch", "Hoffman", "Kassing", "Knutson", "Lawless", "Lawicki", "Mccord", "McCormack", "Miller", "Myers", "Nugent", "Ortiz", "Orwig", "Ory"]
  const randomName = () => {
    return names[(Math.random() * names.length).toFixed()] + " " + lnames[(Math.random() * lnames.length).toFixed()]
  }
  const m = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
  const [namesArr, setNames] = useState([])

  useEffect(() => {
    let names = []
    m.map(i => {
      names.push(randomName())
    })
    setNames(names)
  }, [])

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
            setPassedFromCalls(false)
            setPassedFromStatus(false)
          }
        }
      }, 1);

    }

  }
  useEffect(() => {
    if (bodyDRef.current) {

      if (!passedFromStatusRef.current && Math.round(bodyDRef.current.scrollLeft) == Math.round(document.documentElement.clientWidth)) {
        setClickedFromApp(true)
        setPassedFromStatus(true)
        changedRef.current = false

        if (passedFromCallsRef.current) {
          window.history.back()
          setPassedFromCalls(false)
        }
        setTimeout(() => {
          history.push("/status")
          setClickedFromApp(false)
        }, 10);
      }
      else if (!passedFromCallsRef.current && Math.round(bodyDRef.current.scrollLeft) == Math.round(document.documentElement.clientWidth * 2)) {
        setClickedFromApp(true)
        setPassedFromCalls(true)
        changedRef.current = false

        if (passedFromStatusRef.current) {
          window.history.back()
          setPassedFromStatus(false)
        }
        setTimeout(() => {
          history.push("/calls")
          setClickedFromApp(false)
        }, 10);
      }
      else if (Math.round(bodyDRef.current.scrollLeft) == 0) {
        if (!changedRef.current && (passedFromCallsRef.current || passedFromStatusRef.current)) {
          window.history.back()
        }
        setPassedFromCalls(false)
        setPassedFromStatus(false)
      }
    }
  }, [scrollX, bodyDRef, marginLeft])

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
      if (selectedRoomRecipientName || openAvailableChats) {
        headerRef.style.transform = `translate(-100px,${marginTop}px)`
        bodyRef.style.transform = "translate(-100px,0px)"
      }
      else {
        headerRef.style.transform = `translate(0px,${marginTop}px)`
        bodyRef.style.transform = "translate(0px,0px)"
      }
    }
  }, [selectedRoomRecipientName, openAvailableChats])


  useEffect(() => {
    window.addEventListener('popstate', () => {
      let a = !(openAvailableChatsRef.current || selectedRoomRecipientNameRef.current)
      // let b = 
      if (!clickedFromAppRef.current && a) {
        scrollTo(0)
        changedRef.current = true
        // setMarginLeft(10)
      }
      setClickedFromApp(false)
      setSelectedRoomRecipientName(undefined)
      setOpenAvailableChats(false)
    })
  }, [])

  useEffect(() => {
    clickedFromAppRef.current = clickedFromApp
    passedFromStatusRef.current = passedFromStatus
    passedFromCallsRef.current = passedFromCalls
    openAvailableChatsRef.current = openAvailableChats
    selectedRoomRecipientNameRef.current = selectedRoomRecipientName
  }, [clickedFromApp, passedFromCalls, passedFromStatus, selectedRoomRecipientName, openAvailableChats])
  

  const connectSocket = ()=> {
    socket.on('msgFromServer', data => {
      console.log(data)
      let newRoomsMessages = JSON.parse(JSON.stringify(roomsMessagesRef.current))
      newRoomsMessages[data.roomId].push(data.msgData)
      setRoomsMessages(newRoomsMessages)
    })
  }

  useEffect(() => {
    roomsMessagesRef.current = roomsMessages
  }, [roomsMessages])

  const authorize = ()=> {
    console.log("called for refresh token")
    const authorizeAddress = production ? 'https://vishwas-auth.herokuapp.com/refreshToken' : 'http://localhost:3000/refreshToken'
    axios.get(authorizeAddress, { withCredentials: true })
      .then(result => {
        console.log("called for refresh token")
        if(result.data.logedIn) {
          console.log("logged in")
          setAccessJWTTokken(result.data.signedJWT)
          setEmail(result.data.email)
          setPWD("userPassword")
          setRegistered(true)
          setAgreed(true)
          connectSocket()
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

  const reAuthorizationCheckAndConfig = (result)=> {
    if(result.data.logedIn === true)
    {
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

  return (
    <div className="App">
      
      {agreed ? <React.Fragment>
          {(email && PWD) ? 
            <React.Fragment>
              {registered  && accessJWTTokken ? null : <EnterNameAndDp accessJWTTokken={accessJWTTokken} setAccessJWTTokken={accessJWTTokken => setAccessJWTTokken(accessJWTTokken)} production={production} setRegistered={registered => setRegistered(registered)}  email={email} PWD={PWD} setPWD={pwd => setPWD(pwd)}/>}
            </React.Fragment>
           : <EnterEmail  accessJWTTokken={accessJWTTokken} setAccessJWTTokken={accessJWTTokken => setAccessJWTTokken(accessJWTTokken)} registered={registered} setRegistered={registered => setRegistered(registered)} setEmail={email => setEmail(email)} setPWD={PWD => setPWD(PWD)}/>}
        </React.Fragment>
       : <WelcomePage setAgreed={agreed => setAgreed(agreed)}/>}
      
      {registered && accessJWTTokken ? <React.Fragment>

          <Header setHeaderRefInApp={ref => setHeaderRef(ref.current)} scrollTo={scrollTo} marginLeft={marginLeft} openMenu={val => setMenu(val)} y={marginTop} accessJWTTokken={accessJWTTokken}/>

          <Body shareRef={ref => setBodyRef(ref.current)} setchatsRefForBody={chatsRef => setchatsRefForBody(chatsRef.current)} scrolled={marginTop} names={namesArr} setSelectedRoomRecipientName={selectedRoomRecipientName => setSelectedRoomRecipientName(selectedRoomRecipientName)}  setSelectedRoom_id={selectedRoom_id => setSelectedRoom_id(selectedRoom_id)} contacts={contacts}/>

          { 
            showMenu ? <MenuContainer openMenu={val => setMenu(val)} menuClass={menuClass} /> : null
          }

          <DirectAccess setOpenAvailableChats={bool => setOpenAvailableChats(bool)} />
          
          <Room userData={userData} selectedRoomRecipientName={selectedRoomRecipientName} setSelectedRoomRecipientName={selectedRoomRecipientName => setSelectedRoomRecipientName(selectedRoomRecipientName)} selectedRoom_id={selectedRoom_id} setSelectedRoom_id={selectedRoom_id => setSelectedRoom_id(selectedRoom_id)} roomsMessages={roomsMessages} setRoomsMessages={roomsMessages => setRoomsMessages(roomsMessages)}/>

          <AvailableChats openAvailableChats={openAvailableChats} setOpenAvailableChats={bool => setOpenAvailableChats(bool)} email={email} reAuthorizationCheckAndConfig={result => reAuthorizationCheckAndConfig(result)} setContacts={contacts => setContacts(contacts)} setRoomsMessages={rooms => setRoomsMessages(rooms)} setUserData={userData =>
            setUserData(userData)} />
          
          <Block blockStyle={(selectedRoomRecipientName || openAvailableChats) ? { zIndex: 2, opacity: 0.6 } : { zIndex: -2, opacity: 0 }} />

        </React.Fragment> : null
      }

    </div>
  );
}

export default App;
