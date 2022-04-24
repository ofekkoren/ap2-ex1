import './ChatScreen.css';
import "./Message.css"
import {getFormattedDateString} from "./Utils";
import React from "react";

/**
 * A component of a single chat message.
 * @param props contains the information about a message in the chat
 */
function Message(props) {

    const createMessageContent = (message) => {
        if (message.type === "text")
            return (<h6 className="text-message" key={props.index}>{props.message.content}</h6>)
        if (message.type === "image")
            return (<div><img src={message.content} className="image-message" key={props.index}/></div>)
        if (message.type === "audio") {
            return <div>
                <audio controls className="audio-message">
                    <source src={message.content} className="audio-message" key={props.index}></source>
                    Your browser does not support the audio tag.
                </audio>
            </div>
        }
        if (message.type === "video")
            return <div className="video-message-div ">
                <div className="embed-responsive embed-responsive-16by9">
                    <video src={message.content} className="video-message" preload="auto" controls="controls"></video>
                </div>
            </div>
    }

    return (
        <div
            className={"general-message " + (props.user.username === props.message.sender ? 'sent-message' : 'received-message')}>
            {createMessageContent(props.message)}
            <span className="text-date" key={props.index}>{getFormattedDateString(props.message)}</span>
        </div>
    )

}

export default Message;