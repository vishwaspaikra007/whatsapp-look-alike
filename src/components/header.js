import React, {useEffect} from 'react'
import './header.css'

export default function Header(props) {
    return (
        <div>
            <div className="header">
                <div className="menu">
                    <div className="brandName">WhatsApp</div>
                    <div><i className="icon-search"></i></div>
                    <div><i className="vertical-menu"></i></div>
                </div>
                <div className="options">
                    <div><i className="icon-camera"></i></div>
                    <div onClick={() => props.scrollTo(0)}>CHATS</div>
                    <div onClick={() => props.scrollTo(1)}>STATUS</div>
                    <div onClick={() => props.scrollTo(2)}>CALLS</div>
                </div>
            </div>
        </div>
    )
}
