import React, {useEffect, useState, useRef} from 'react'
import axios from 'axios'
import './EnterNameAndDp.css'
import './EnterEmail.css'
import config from './config'

export default function EnterNameAndDp(props) {
    const [name, setName] = useState(undefined)
    const [disabled, setDisabled] = useState(false)
    const [registered, setRegistered] = useState(false)
    
    const registrationAddress = config.production ? config.server + '/register' : 'http://localhost:3000/register'

    const saveUserMetaDataAddress = config.production ? config.server + '/saveUserMetaData' : 'http://localhost:3000/saveUserMetaData'
    const enterNameRef = useRef()
    let data = {}

    const saveUserMetaDataFunc = ()=> {
        axios.post(saveUserMetaDataAddress, {}, { withCredentials: true })
        .then(result => {
            setDisabled(false)
            if(result.data.saved) {
                props.setPWD('userPassword')
                props.setRegistered(true)
            } else {
                alert(result.data.msg + "try one more time")
            }
        }).catch(err => {
            setDisabled(false)
            console.log(err)
            alert("error occured try again")
        })
    }
    const setUserInDB = () => {
        setDisabled(true)
        data.name = name
        data.email = props.email
        data.PWD = props.PWD
        axios.post(registrationAddress, data, { withCredentials: true })
        .then(result => {
            if(result.data.registered) {
                console.log('registered')
                props.setAccessJWTTokken(result.data.signedJWT)
                axios.defaults.headers.common['Authorization'] = "bearer " + result.data.signedJWT
                setRegistered(result.data.registered)
                saveUserMetaDataFunc()
            } else {
                setDisabled(false)
                alert(result.data.msg)
                enterNameRef.current.focus()
            }
        }).catch(err => {
            console.log(err)
            setDisabled(false)
            alert("something went wrong try again")
            enterNameRef.current.focus()
        })
    }

    useEffect(() => {
        if(enterNameRef)
            enterNameRef.current.focus()
    }, [])
    return (
        <div className="EnterEmail EnterNameAndDp">
            <h2>Profile info</h2>
            <p>Please provide your name and an optional profile photo</p>
            <div className="imgContainer">
                <img className="defaultImg" src={require('../assets/person.svg')} alt="profile pic"/>
            </div>
            <input ref={enterNameRef} disabled={disabled} type="text" name="name" onChange={e => setName(e.target.value)}/>
            <button onClick={() => registered ? saveUserMetaDataFunc() : setUserInDB()} disabled={disabled}>Next</button>
        </div>
    )
}
