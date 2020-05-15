import React, {useEffect, useRef, useState} from 'react'
import './menu.css'
export default function MenuContainer(props) {
    const [allowClick, setAllowClick] = useState(true)
    const menuRef = useRef()
    const closeMenu = ()=> {
        if(allowClick)
        {
            menuRef.current.className="chatsMenu chatsMenuFull chatsMenuFullHide" 
            setTimeout(() => {
                menuRef.current.className="chatsMenu" 
                setAllowClick(true)
                props.openMenu(false)
            }, 300);
        }
        setAllowClick(false)
    }
    useEffect(() => props.shareRef(menuRef), [])
    return (
        <div className="menuContainer" onClick={() => closeMenu()}>
            <div className="chatsMenu" ref={menuRef}>
                <div className="MenuList">
                    <span >New group</span>
                    <span>New broadcast</span>
                    <span>WhatsApp web</span>
                    <span>Starred messages</span>
                    <span>Settings</span>
                </div>
            </div>
        </div>
    )
}
