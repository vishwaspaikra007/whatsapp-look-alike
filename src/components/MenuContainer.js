import React, {useEffect, useRef} from 'react'
import './menu.css'
export default function MenuContainer(props) {
    const menuRef = useRef()
    const closeMenu = ()=> {
        menuRef.current.className="chatsMenu chatsMenuFull chatsMenuFullHide" 
        setTimeout(() => {
            props.openMenu(false)
        }, 300);
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
