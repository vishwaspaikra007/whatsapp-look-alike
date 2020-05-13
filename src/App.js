import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './components/header'
import Body from './components/Body';
function App() {

  const [bodyRef, setBodyRef] = useState(null)
  const [scrollX, setScrollX] = useState(0)
  const scrollTo = (i)=> {
    bodyRef.current.style.scrollSnapType = "none"
    let scrollAnime;
    if(scrollAnime)
      clearInterval(scrollAnime)
    console.log(bodyRef);
    let start = bodyRef.current.scrollLeft
    const end = i*bodyRef.current.clientWidth
    const distance = end - start
    const pix = distance > 0 ? 15: -15
    let check = 0;
    if(bodyRef)
    {
      scrollAnime = setInterval(() => {
        console.log(start)
        start+= pix 
        setScrollX(start)
       check += pix
        if(Math.abs(check) >= Math.abs(distance))
          {
            clearInterval(scrollAnime)
            bodyRef.current.style.scrollSnapType = "x mandatory"
          }
      }, 1);
      
    }

  }
  useEffect(() => {
    if(bodyRef)
      bodyRef.current.scrollTo(scrollX,0)
  },[scrollX])

  return (
    <div className="App">
      <Header scrollTo={scrollTo}/>
      <Body shareRef={ref => setBodyRef(ref)}/>
    </div>
  );
}

export default App;
