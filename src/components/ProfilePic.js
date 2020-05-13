import React, {useState} from 'react'

export default function ProfilePic() {
    const bgStyle = {
        background: '#ece5dd'
    }
    const {img, setImg} = useState('../assets/person.svg')
    return (
        <div style={bgStyle}>
            <img src={imj} />
        </div>
    )
}
