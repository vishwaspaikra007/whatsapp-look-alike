import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './components/header'
import Body from './components/Body';
import MenuContainer from './components/MenuContainer';
function App() {

  const [bodyRef, setBodyRef] = useState(null)
  const [scrollX, setScrollX] = useState(0)
  const [marginLeft, setMarginLeft] = useState(10)
  const [showMenu, setMenu] = useState(false)
  const [menuClass, setMenuClass] = useState('menuCard')
  const [chatsRefForBody, setchatsRefForBody] = useState()
  const [marginTop, setMarginTop] = useState(0)
  const [headerRef, setHeaderRef] = useState()
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
        if(scrollTimer)
          clearTimeout(scrollTimer)
        chatsRefForBody.style.transition = "height 0s"
        bodyRef.style.transition = "margin-top 0ms, height 0ms"
        headerRef.style.transition =  "margin-top 0ms"
        if(!lastScrolledTopValue)
          lastScrolledTopValue = chatsRefForBody.scrollTop

        scrolled +=  lastScrolledTopValue - chatsRefForBody.scrollTop
        if(scrolled < -60)
          scrolled = - 60
        else if(scrolled > 0)
          scrolled = 0
        setMarginTop(scrolled)
        scrollTimer = setTimeout(() => {
          chatsRefForBody.style.transition = "height 400ms"
          bodyRef.style.transition = "margin-top 400ms, height 400ms"
          headerRef.style.transition =  "margin-top 400ms"
          if(scrolled < -30 && chatsRefForBody.scrollTop > 60)
            scrolled = -60
          else
            scrolled = 0
          setMarginTop(scrolled)
        }, 400);
        lastScrolledTopValue = chatsRefForBody.scrollTop
      })
    }
    return ()=> {
      if(chatsRefForBody)
        chatsRefForBody.removeEventListener('scroll')
    }
  },[chatsRefForBody, headerRef])

  return (
    <div className="App">
      <Header setHeaderRefInApp={ref => setHeaderRef(ref.current)} scrollTo={scrollTo} marginLeft={marginLeft} openMenu={val => setMenu(val)} marginTop={marginTop}/>
      <Body shareRef={ref => setBodyRef(ref.current)} setchatsRefForBody={chatsRef => setchatsRefForBody(chatsRef.current)} scrolled={marginTop}/>
      {
        showMenu ? <MenuContainer openMenu={val => setMenu(val)} menuClass={menuClass}/>: null
      }
    </div>
  );
}

export default App;
