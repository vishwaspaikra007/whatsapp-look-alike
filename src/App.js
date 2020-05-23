import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './components/header'
import Body from './components/Body';
import MenuContainer from './components/MenuContainer';
import Room from './components/Room';
import Block from './components/Block';
import DirectAccess from './components/DirectAccess';
import AvailableChats from './components/AvailableChats';
function App() {

  const [bodyRef, setBodyRef] = useState(null)
  const [scrollX, setScrollX] = useState(0)
  const [marginLeft, setMarginLeft] = useState(10)
  const [showMenu, setMenu] = useState(false)
  const [menuClass, setMenuClass] = useState('menuCard')
  const [chatsRefForBody, setchatsRefForBody] = useState()
  const [marginTop, setMarginTop] = useState(0)
  const [headerRef, setHeaderRef] = useState()

  //to generate random names

  let names = ["Adam", "Alex", "Aaron", "Ben", "Carl", "Dan", "David", "Edward", "Fred", "Frank", "George", "Hal", "Hank", "Ike", "John", "Jack", "Joe", "Larry", "Monte", "Matthew", "Mark", "Nathan", "Otto", "Paul", "Peter", "Roger", "Roger", "Steve", "Thomas", "Tim", "Ty", "Victor", "Walter"]
  let lnames = ["Anderson", "Ashwoon", "Aikin", "Bateman", "Bongard", "Bowers", "Boyd", "Cannon", "Cast", "Deitz", "Dewalt", "Ebner", "Frick", "Hancock", "Haworth", "Hesch", "Hoffman", "Kassing", "Knutson", "Lawless", "Lawicki", "Mccord", "McCormack", "Miller", "Myers", "Nugent", "Ortiz", "Orwig", "Ory"]
  const randomName = ()=> {
      return names[(Math.random()*names.length).toFixed()] + " " + lnames[(Math.random()*lnames.length).toFixed()]
  }
  const m = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
  const [namesArr, setNames] = useState([])

  useEffect(() => {
    let names = []
    m.map(i => {
      names.push(randomName())
    })
    setNames(names)
  }, [])

  const scrollTo = (i)=> {
    bodyRef.style.scrollSnapType = "none"
    let scrollAnime;

    if(scrollAnime)
      clearInterval(scrollAnime)

    let start = bodyRef.scrollLeft
    const end = i*bodyRef.clientWidth
    const distance = end - start
    const pix = distance/5
    let check = 0;

    if(bodyRef)
    {
      scrollAnime = setInterval(() => {
        start+= pix 
        setScrollX(start)
       check += pix
        if(Math.abs(check) >= Math.abs(distance))
          {
            clearInterval(scrollAnime)
            bodyRef.style.scrollSnapType = "x mandatory"
          }
      }, 1);
      
    }

  }
  useEffect(() => {
    if(bodyRef)
      bodyRef.scrollTo(scrollX,0)
  },[scrollX,bodyRef])

  useEffect(() => {
    if(bodyRef) {
      bodyRef.addEventListener('scroll', e => {
        setMarginLeft(10 + (bodyRef.scrollLeft/bodyRef.scrollWidth)*90)
      })
    }
    // on component unmount so it doesnt update unnecessarily
    return () => {
      if(bodyRef)
        bodyRef.removeEventListener('scroll')
    }
  },[bodyRef])

  useEffect(()=> {
    if(showMenu)
      setMenuClass("menuCardFull")
    else
      setMenuClass(" ")
  },[showMenu])

  useEffect(()=> {
    if(chatsRefForBody && headerRef)
    {
      //called only once
      let lastScrolledTopValue
      let scrolled = 0
      let scrollTimer
      chatsRefForBody.addEventListener('scroll', e => {
        console.log("hr")
        if(scrollTimer)
          clearTimeout(scrollTimer)
        headerRef.style.transition = "0ms"
        if(!lastScrolledTopValue)
          lastScrolledTopValue = chatsRefForBody.scrollTop

        scrolled +=  lastScrolledTopValue - chatsRefForBody.scrollTop
        if(scrolled < -60)
          scrolled = - 60
        else if(scrolled > 0)
          scrolled = 0
        setMarginTop(scrolled)
        scrollTimer = setTimeout(() => {
          headerRef.style.transition = "transform 300ms ease-in-out"
          if(scrolled < -30 && chatsRefForBody.scrollTop > 60)
            scrolled = -60
          else
            scrolled = 0
          setMarginTop(scrolled)
        }, 300);
        lastScrolledTopValue = chatsRefForBody.scrollTop
      })
    }
    return ()=> {
      if(chatsRefForBody)
        chatsRefForBody.removeEventListener('scroll')
    }
  },[chatsRefForBody, headerRef])

  //to send open room chat data
  const [roomDetails, setroomDetails] = useState()
  // open available chats
  const [openAvailableChats, setOpenAvailableChats] = useState(false)
  useEffect(() => {
    if(headerRef && bodyRef)
    {
        if(roomDetails || openAvailableChats)
        {
            headerRef.style.transform = `translate(-100px,${marginTop}px)`
            bodyRef.style.transform = "translate(-100px,0px)"
        }
        else
        {
          headerRef.style.transform = `translate(0px,${marginTop}px)`
          bodyRef.style.transform = "translate(0px,0px)"
        }
    }
  }, [roomDetails,openAvailableChats])
  
  return (
    <div className="App">
      <Header setHeaderRefInApp={ref => setHeaderRef(ref.current)} scrollTo={scrollTo} marginLeft={marginLeft} openMenu={val => setMenu(val)} y={marginTop}/>
      <Body shareRef={ref => setBodyRef(ref.current)} setchatsRefForBody={chatsRef => setchatsRefForBody(chatsRef.current)} scrolled={marginTop} names={namesArr}  setroomDetails={roomDetails => setroomDetails(roomDetails)}/>
      {
        showMenu ? <MenuContainer openMenu={val => setMenu(val)} menuClass={menuClass}/>: null
      }
      <DirectAccess setOpenAvailableChats={bool => setOpenAvailableChats(bool)}/>
      <Room roomDetails={roomDetails} setroomDetails={roomDetails => setroomDetails(roomDetails)}/>
      <AvailableChats openAvailableChats={openAvailableChats}  setOpenAvailableChats={bool => setOpenAvailableChats(bool)}/>
      <Block roomDetails={(roomDetails || openAvailableChats) ? {zIndex: 2, opacity: 0.6} : {zIndex: -2, opacity: 0}}/>
    </div>
  );
}

export default App;
