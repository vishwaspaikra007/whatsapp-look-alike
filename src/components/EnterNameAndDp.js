import React, {useEffect, useState} from 'react'
import axios from 'axios'
import './EnterNameAndDp.css'
import './EnterEmail.css'

export default function EnterNameAndDp(props) {
    const [name, setName] = useState(undefined)
    const [disabled, setDisabled] = useState(false)
    const registrationAddress = props.production ? 'https://vishwas-auth.herokuapp.com/register' : 'http://localhost:3000/register'

    let data = {}
    const setUserInDB = () => {
        setDisabled(true)
        data.name = name
        data.email = props.email
        data.PWD = props.PWD
        axios.post(registrationAddress, data, { withCredentials: true })
        .then(result => {
            console.log(result)
            setDisabled(false)
            props.setRegistered(result.data.registered)
        })
    }

    return (
        <div className="EnterEmail EnterNameAndDp">
            <h2>Profile info</h2>
            <p>Please provide your name and an optional profile photo</p>
            <div className="imgContainer">
                <img className="defaultImg" src={require('../assets/person.svg')} alt="profile pic"/>
            </div>
            <input disabled={disabled} type="text" name="name" onChange={e => setName(e.target.value)}/>
            <button onClick={() => setUserInDB()} disabled={disabled}>Next</button>
        </div>
    )
}
