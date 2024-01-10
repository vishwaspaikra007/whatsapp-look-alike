import React from 'react'
import './ProfilePic.css'
import {ReactComponent as Person} from '../assets/person.svg'
export default function ProfilePic() {
    const logo = "svg"

    return (
        <div className={"bgStyle"}>
            {
                logo === "svg" ?
                <Person /> :
                <img className="defaultImg" src={require('../assets/person.svg')} alt="profile pic"/>
            }
        </div>
    )
}
