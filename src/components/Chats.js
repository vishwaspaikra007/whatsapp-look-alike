import React, {useState, useEffect, useRef} from 'react'
import ChatContainer from './ChatContainer'
import './Chats.css'
export default function Chats(props) {

    function randomDate() {
        return (Math.random()*30 + 1).toFixed() + "/" + (Math.random()*12 + 1).toFixed() + "/" + "2020"
    }

    const [datesArr, setDates] = useState([])
    const chatsRef  = useRef()

    useEffect(()=> {
        let dates = []
       props.names.forEach(element => {
           dates.push(randomDate())
       })
       setDates(dates)
       props.setchatsRef(chatsRef)
    },[props.names])

    return (
        <div ref={chatsRef} className={"chatsContainer"}>
            {
                props.names.map((i, index) => {
                    return (<ChatContainer key={index} id={index} name={i} date={datesArr[index]} setroomDetails={roomDetails => props.setroomDetails(roomDetails)}/>)
                })
            }
            <div>Tap and hold on chat for more option</div>
        </div>
    )
}
