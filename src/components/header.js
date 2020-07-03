import React, {useState, useEffect, useRef} from 'react'
import './header.css'
import axios from 'axios'
export default function Header(props) {
    const [allowClick, setAllowClick] = useState(false)
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
                    <div onClick={() => props.scrollTo(0)}>CHATS</div>
                    <div onClick={() => props.scrollTo(1)}>STATUS</div>
                    <div onClick={() => props.scrollTo(2)}>CALLS</div>
                </div>
                <span className="indicator" style={spanStyle}></span>
            </div>
        </div>
    )
}
