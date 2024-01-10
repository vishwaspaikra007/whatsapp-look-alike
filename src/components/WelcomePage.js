import React from 'react'
import './WelcomePage.css'
import './Button.css'

export default function WelcomePage(props) {
    return (
        <div className="WelcomePage">
            <h1>Welcome to WhatsApp</h1>
            <div>
                <span></span>
            </div>
            <p>Read our <span>Privacy Policy</span>. Tap "Agree and continue" to accept the <span>Terms of Service</span>.</p>
            <button onClick={() => props.setAgreed(true)}>AGREE AND CONTINUE</button>
            <footer>
                from
                <span>FACEBOOK</span>
            </footer>
        </div>
    )
}
