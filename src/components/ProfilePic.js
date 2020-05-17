import React from 'react'
import {ReactComponent as PersonLogo} from '../assets/PersonLogo.svg'
import './ProfilePic.css'
export default function ProfilePic() {
    const logo = "svg"

    return (
        <div className={"bgStyle"}>
            {
                logo === "svg" ?
                <PersonLogo /> :
                <img className="defaultImg" src={require('../assets/person.svg')} alt="profile pic"/>
            }
        </div>
    )
}
