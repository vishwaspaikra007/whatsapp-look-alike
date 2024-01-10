import React from 'react'
import style from './MsgStatus.module.css'

export default function MsgStatus(props) {
    return (
        <React.Fragment>
            {
                new Date(props.msgTimestamp).getTime() <= new Date(props.seen).getTime() ? 
                <div className={style.doubleBlueTick}/> :
                new Date(props.msgTimestamp).getTime() <= new Date(props.received).getTime() ?
                    <div className={style.doubleTick}/> :
                    new Date(props.msgTimestamp).getTime() <= new Date(props.sent).getTime() ?
                        <div className={style.singleTick}/> :
                        <div className={style.pending}/>
            }
        </React.Fragment>
    )
}
