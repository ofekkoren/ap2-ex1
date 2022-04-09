import './LeftChatItem.css';
// import "./RightScreen.css"
import React from 'react';


function LeftChatItem(conversation) {
    var lastMessagePresented= "";
    var iconClassName = "";
    if(conversation.type == "image") {
        lastMessagePresented = "image";
        iconClassName = "bi bi-image";
    } else if (conversation.type == "record") {
        lastMessagePresented = "voice recording";
        iconClassName = "bi bi-mic-fill";
    } else if (conversation.type == "video") {
        lastMessagePresented = "video";
        iconClassName = "bi bi-camera-video-fill"
    } else {
        lastMessagePresented = conversation.lastMessage;
    }
    console.log(conversation.lastMessage);
    return (
        <div className='left-chat-item'>
            {/* <img src={require('../images/userImages/boy-image.png')} className="rounded float-start top-left-profile-image"></img> */}
            {/* <img src={conversation.image.image} className="rounded float-start top-left-profile-image"></img> */}
            <img src={conversation.image} className="chat-profile-image top-profile-image float-start"></img>
            <span className="chat-member-name">{conversation.usernameInChat}</span>
            <span className='last-message-time'>{conversation.time}</span>
            {/* <p className="chat-last-message">{ if(conversation.type == "text") {
                conversation.lastMessage} }</p> */}
            <p className="chat-last-message">{lastMessagePresented}&nbsp;
            <i class={iconClassName}></i>
            </p>

        </div>
    );
}
export default LeftChatItem;