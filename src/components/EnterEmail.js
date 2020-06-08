import React, {useState} from 'react'
import './EnterEmail.css'
import './Button.css'

export default function EnterEmail() {
    const [email, setEmail] = useState(null)
    
    return (
        <div className="EnterEmail">
            <h2>Enter Your E-mail</h2>
            <p>WhatsApp will send an E-mail to verify your email. <span>What's my email?</span></p>
            <input type="email" placeholder="email" onChange={ e => setEmail(e.target.value)}/>
            <button>Next</button>
        </div>
    )
}
