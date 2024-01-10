import React, {useState, useEffect} from 'react'
import formatTime from './formatTime'
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser'
import MsgStatus from './MsgStatus'

export default function MsgBox(props) {

    // const [msgStatus, setMsgStatus] = useState({})

    // useEffect(() => {
    //     if(props.selectedRoom_id) {
    //         console.log("room msgStatus", props.msgStatusRef.current)
    //         const tempMsgSatus = {}
    //         tempMsgSatus.seen = new Date(props.msgStatusRef.current[props.selectedRoom_id].seen).getTime()
    //         tempMsgSatus.received = new Date(props.msgStatusRef.current[props.selectedRoom_id].received).getTime()
    //         tempMsgSatus.sent = new Date(props.msgStatusRef.current[props.selectedRoom_id].sent).getTime()

    //         setMsgStatus(tempMsgSatus)
    //     }
    // }, [props.msgStatusRef, props.selectedRoom_id])
    
    return (
        <div className={['msgBox ', props.obj.senderId === props.userData._id ? 'sent' : props.obj.senderId === 'bot1' ? 'bot1' : 'received', props.messageOwnerChanged ? 'marginTop' : null].join(' ')}>
            <div>{ReactHtmlParser(props.obj.msg)}</div>
            <div>
                <div>{formatTime(props.obj.timestamp)}</div>
                {
                    props.obj.senderId == props.userData._id ?
                        <MsgStatus msgTimestamp={props.obj.timestamp} seen={props.seen} received={props.received} sent={props.sent}/>
                        // new Date(props.obj.timestamp).getTime() <= new Date(props.seen).getTime() ? 
                        //     <div className={'doubleBlueTick msgStatus'}/> :
                        //     new Date(props.obj.timestamp).getTime() <= new Date(props.received).getTime() ?
                        //         <div className={'doubleTick msgStatus'}/> :
                        //         new Date(props.obj.timestamp).getTime() <= new Date(props.sent).getTime() ?
                        //             <div className={'singleTick msgStatus'}/> :
                        //             <div className={'pending msgStatus'}/>
                    : null
                }
            </div>
        </div>     
    )
}
