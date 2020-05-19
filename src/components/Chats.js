import React, {useState, useEffect, useRef} from 'react'
import ChatContainer from './ChatContainer'
import './Chats.css'
export default function Chats(props) {
    let chatsHeight = (50 + JSON.parse(props.scrolled))
    const chatsStyle = {
        // height: "calc(100vh - " + chatsHeight + "px)",
    }
    let names = ["Adam", "Alex", "Aaron", "Ben", "Carl", "Dan", "David", "Edward", "Fred", "Frank", "George", "Hal", "Hank", "Ike", "John", "Jack", "Joe", "Larry", "Monte", "Matthew", "Mark", "Nathan", "Otto", "Paul", "Peter", "Roger", "Roger", "Steve", "Thomas", "Tim", "Ty", "Victor", "Walter"]
    let lnames = ["Anderson", "Ashwoon", "Aikin", "Bateman", "Bongard", "Bowers", "Boyd", "Cannon", "Cast", "Deitz", "Dewalt", "Ebner", "Frick", "Hancock", "Haworth", "Hesch", "Hoffman", "Kassing", "Knutson", "Lawless", "Lawicki", "Mccord", "McCormack", "Miller", "Myers", "Nugent", "Ortiz", "Orwig", "Ory", "Paiser", "Pak", "Pettigrew", "Quinn", "Quizoz", "Ramachandran", "Resnick", "Sagar", "Schickowski", "Schiebel", "Sellon", "Severson", "Shaffer", "Solberg", "Soloman", "Sonderling", "Soukup", "Soulis", "Stahl", "Sweeney", "Tandy", "Trebil", "Trusela", "Trussel", "Turco", "Uddin", "Uflan", "Ulrich", "Upson", "Vader", "Vail", "Valente", "Van Zandt", "Vanderpoel", "Ventotla", "Vogal", "Wagle", "Wagner", "Wakefield", "Weinstein", "Weiss", "Woo", "Yang", "Yates", "Yocum", "Zeaser", "Zeller", "Ziegler", "Bauer", "Baxster", "Casal", "Cataldi", "Caswell", "Celedon", "Chambers", "Chapman", "Christensen", "Darnell", "Davidson", "Davis", "DeLorenzo", "Dinkins", "Doran", "Dugelman"]
    const m = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
    const randomName = ()=> {
        return names[(Math.random()*names.length).toFixed()] + " " + lnames[(Math.random()*lnames.length).toFixed()]
    }

    function randomDate() {
        return (Math.random()*30 + 1).toFixed() + "/" + (Math.random()*12 + 1).toFixed() + "/" + "2020"
    }

    const [namesArr, setNames] = useState([])
    const [datesArr, setDates] = useState([])
    const chatsRef  = useRef()

    useEffect(()=> {
        let names = []
        let dates = []
        m.forEach(i => {
            names.push(randomName())
            dates.push(randomDate())
        })
        setNames(names)
        setDates(dates)
        props.setchatsRef(chatsRef)
    },[])

    //to send scroll data
    return (
        <div style={chatsStyle} ref={chatsRef} className={"chatsContainer"}>
            {
                m.map(i => {
                    return (<ChatContainer key={i} id={i} name={namesArr[i]} date={datesArr[i]}/>)
                })
            }
            <div>Tap and hold on chat for more option</div>
        </div>
    )
}
