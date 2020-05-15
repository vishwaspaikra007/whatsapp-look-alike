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
  const scrollTo = (i)=> {
    bodyRef.style.scrollSnapType = "none"
    let scrollAnime;

    if(scrollAnime)
      clearInterval(scrollAnime)

    let start = bodyRef.scrollLeft
    const end = i*bodyRef.clientWidth
    const distance = end - start
    const pix = distance/10
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

  return (
    <div className="App">
      <Header scrollTo={scrollTo} marginLeft={marginLeft} openMenu={val => setMenu(val)}/>
      <Body shareRef={ref => setBodyRef(ref.current)}/>
      {
        showMenu ? <MenuContainer openMenu={val => setMenu(val)} menuClass={menuClass}/>: null
      }
    </div>
  );
}

export default App;
