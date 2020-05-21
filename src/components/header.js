import React, {useState, useEffect, useRef} from 'react'
import './header.css'

export default function Header(props) {
    const [allowClick, setAllowClick] = useState(false)
    const headerRef = useRef()
    let spanStyle = {
        marginLeft: props.marginLeft + "%",
    }
    let headerStyle = {
        marginTop: props.marginTop + "px",
    }
    const openMenu = () => {
        if(allowClick)
            props.openMenu(true)
    }

    useEffect(()=> {
        setAllowClick(true)
        props.setHeaderRefInApp(headerRef)
    },[])
    return (
        <div>
            <div className="header" style={headerStyle} ref={headerRef}>
                <div className="menu">
                    <div className="brandName">WhatsApp</div>
                    <div><i className="icon-search"></i></div>
                    <div onClick={openMenu}><i className="vertical-menu-room"></i></div>
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
