import React from 'react'
import './header.css'
export default function header() {
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
                    <div>CHATS</div>
                    <div>STATUS</div>
                    <div>CALLS</div>
                </div>
            </div>
        </div>
    )
}
