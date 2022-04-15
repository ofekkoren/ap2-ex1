import './LeftChatItem.css';
import React from 'react';


function LeftChatItem(conversation) {
    var lastMessagePresented= "";
    var iconClassName = "";

    // If the type of the message is image, we present the string "image" and an image icon next to it as the last message.
    if(conversation.type == "image") {
        lastMessagePresented = "image";
        iconClassName = "bi bi-image";
    } 
    // If the type of the message is record, we present the string "voice recording" and a mic icon next to it as the last message.
    else if (conversation.type == "record") {
        lastMessagePresented = "voice recording";
        iconClassName = "bi bi-mic-fill";
    }
    // If the type of the message is video, we present the string "video" and a camera-video icon next to it as the last message.
    else if (conversation.type == "video") {
        lastMessagePresented = "video";
        iconClassName = "bi bi-camera-video-fill"
    } 
    
    // If the type of the message is text (the last type of message), we present the last message sent with no icon.
    else {
        lastMessagePresented = conversation.lastMessage;
    }

    //DOTO - ERASE
    // console.log(conversation.lastMessage);
    return (
        <div className='left-chat-item'>
            <img src={conversation.image} className="chat-profile-image top-profile-image float-start"></img>
            <span className="chat-member-name">{conversation.usernameInChat}</span>
            <span className='last-message-time'>{conversation.time}</span>
            <p className="chat-last-message">{lastMessagePresented}&nbsp;
            <i className={iconClassName}></i>
            </p>

        </div>
    );
}
export default LeftChatItem;