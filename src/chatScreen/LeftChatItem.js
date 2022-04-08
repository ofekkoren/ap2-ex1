import './LeftChatItem.css';
// import "./RightScreen.css"
import React from 'react';


function LeftChatItem(conversation) {
    return (
        <div className='left-chat-item'>
            {/* <img src={require('../images/userImages/boy-image.png')} className="rounded float-start top-left-profile-image"></img> */}
            {/* <img src={conversation.image.image} className="rounded float-start top-left-profile-image"></img> */}
            <img src={conversation.image} className="chat-profile-image top-profile-image float-start"></img>
            <span className="chat-member-name">{conversation.usernameInChat}</span>
            <span className='last-message-time'>{conversation.time}</span>
            {/* <p className="chat-last-message">{ if(conversation.type == "text") {
                conversation.lastMessage} }</p> */}
            <p className="chat-last-message">{conversation.lastMessage}</p>

        </div>
    );
}
export default LeftChatItem;