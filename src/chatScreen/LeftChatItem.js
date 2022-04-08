import './LeftChatItem.css';
import React from 'react';


function LeftChatItem(conversation) {
    return (
        <div className='left-chat-item'>
            {/* <img src={require('../images/userImages/boy-image.png')} className="rounded float-start top-left-profile-image"></img> */}
            <img src={conversation.image.image} className="rounded float-start top-left-profile-image"></img>
            <h5 className="chat-member-name">{conversation.usernameInChat.usernameInChat}</h5>
            <span className="chat-last-message">{conversation.lastMessage.lastMessage}</span>
            <span className='last-message-time'>{conversation.time.time}</span>
        </div>
    );
}
export default LeftChatItem;