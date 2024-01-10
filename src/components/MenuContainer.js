import React, {useEffect, useState} from 'react'
import './menu.css'
export default function MenuContainer(props) {
    const [allowClick, setAllowClick] = useState(false)
    const [menuClass, setMenuClass] = useState("")
    const closeMenu = ()=> {
        if(allowClick)
        {
            setMenuClass("menuCardFull menuCardFullHide")
            setTimeout(() => {
                setMenuClass("") 
                setAllowClick(true)
                props.openMenu(false)
            }, 295);
        }
        setAllowClick(false)
    }
    
    useEffect(() => {
        setMenuClass("")
        setTimeout(() => {
            setMenuClass(props.menuClass)
        }, 10);
    },[props.menuClass])

    useEffect(()=> {
        setAllowClick(true)
        setMenuClass("") 
    },[])

    return (
        <div className="menuContainer" onClick={() => closeMenu()}>
            <div className={"menuCard " + menuClass}>
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
