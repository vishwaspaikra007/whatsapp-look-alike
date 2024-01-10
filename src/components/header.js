import React, {useState, useEffect, useRef} from 'react'
import './header.css'
import axios from 'axios'
import BackgroundClickAnimation from './BackgroundClickAnimation'

export default function Header(props) {
    const [allowClick, setAllowClick] = useState(false)
    const [clicked1, setClicked1] = useState(false)
    const [clicked2, setClicked2] = useState(false)
    const [clicked3, setClicked3] = useState(false)
    const headerRef = useRef()
    let spanStyle = {
        marginLeft: props.marginLeft + "%",
    }
    let headerStyle = {
        transform: `translate(0px,${props.y}px)`
    }
    const openMenu = () => {
        if(allowClick)
            props.openMenu(true)
    }

    useEffect(()=> {
        setAllowClick(true)
        props.setHeaderRefInApp(headerRef)
    },[])

    useEffect(() => {
    if(props.accessJWTTokken)
    {
        axios.defaults.withCredentials = true
        axios.defaults.headers.common['Authorization'] = "bearer " + props.accessJWTTokken
    }
    }, [props.accessJWTTokken])
     
    return (
        <div>
            <div className="header" style={headerStyle} ref={headerRef}>
                <div className="menu">
                    <div className="brandName">WhatsApp</div>
                    <div><i className="icon-search"></i></div>
                    <div onClick={openMenu}><i className="vertical-menu"></i></div>
                </div>
                <div className="options">
                    <div><i className="icon-camera"></i></div>
                    <div onClick={() => {props.scrollTo(0); setClicked1(true)}}>CHATS
                        <BackgroundClickAnimation clicked={clicked1} setClicked={bool => setClicked1(bool)}/>
                    </div>
                    <div onClick={() => {props.scrollTo(1); setClicked2(true)}}>STATUS
                        <BackgroundClickAnimation  clicked={clicked2} setClicked={bool => setClicked2(bool)}/>
                    </div>
                    <div onClick={() => {props.scrollTo(2); setClicked3(true)}}>CALLS
                        <BackgroundClickAnimation  clicked={clicked3} setClicked={bool => setClicked3(bool)}/>
                    </div>
                </div>
                <span className="indicator" style={spanStyle}></span>
            </div>
        </div>
    )
}
