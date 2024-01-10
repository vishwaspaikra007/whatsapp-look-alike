import React, {useState, useEffect} from 'react'
import './BackgroundClickAnimation.css'

export default function BackgroundClickAnimation(props) {

    const initialValue = {
        transition: '0s',
        transform: 'scale(1)',
        opacity: 1
    }
    const finalValue = {
        transform: 'scale(10)',
        opacity: 0,
        transition: '1s'
    }

    const [currentStyle, setCurrentStyle] = useState(finalValue)

    const isObjectSame = (obj1, obj2) => {
        let ans = true
        for(let key in obj1) {
            ans &= (obj1[key] === obj2[key])
        }
        return ans
    }
    useEffect(() => {
        // console.log(currentStyle)
        if(isObjectSame(currentStyle, initialValue))
            setTimeout(() => {
                setCurrentStyle(finalValue)
            }, 0); 
    }, [currentStyle])

    useEffect(() => {
        if(props.clicked) {
            setCurrentStyle(initialValue)
            props.setClicked(false)
        }
    }, [props.clicked])
    return (
        <div className="circularClickAnimationContainer">
            <div className={'circularBody'} style={currentStyle}></div>
        </div>
    )
}
