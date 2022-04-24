import './LeftChatItem.css';
import React from 'react';


function LeftChatItem(props) {

    var lastMessagePresented = "";
    var iconClassName = "";

    // If the type of the message is image, we present the string "image" and an image icon next to it as the last message.
    if (props.conversation.type === "image") {
        lastMessagePresented = "image";
        iconClassName = "bi bi-image";
    }
    // If the type of the message is record, we present the string "voice recording" and a mic icon next to it as the last message.
    else if (props.conversation.type === "audio") {
        lastMessagePresented = "voice recording";
        iconClassName = "bi bi-mic-fill";
    }
    // If the type of the message is video, we present the string "video" and a camera-video icon next to it as the last message.
    else if (props.conversation.type === "video") {
        lastMessagePresented = "video";
        iconClassName = "bi bi-camera-video-fill"
    }

    // If the type of the message is text (the last type of message), we present the last message sent with no icon.
    else {
        lastMessagePresented = props.conversation.lastMessage;
    }


    // if (lastMessagePresented.length > 20) {
    //     lastMessagePresented = lastMessagePresented.substring(0, 20) + `...`
    // }

    function showChat(chat) {
        props.refer.current = chat;
        props.setChat(chat);
    }

    return (
        <div className='left-chat-item' onClick={() => showChat(props.chat)}>
            {/* <div className='left-container'></div> */}
            <div className='left-image'>
                <img src={props.conversation.image} className="chat-profile-image float-start"></img>
            </div>
            <div className='mid-item'>
                <div>
                    <span className="chat-member-name">{props.conversation.nicknameInChat}</span>
                    <div className='last-message-time'>{props.conversation.time}</div>
                </div>
                <div className="chat-last-message">{lastMessagePresented}&nbsp;
                    <i className={iconClassName}></i>
                </div>
            </div>
        </div>

        // <div className='left-chat-item' onClick={() => showChat(props.chat)}>

        //     <div className='left-side-of-item col-xl col-lg col-md'>
        //         <img src={props.conversation.image} className="chat-profile-image top-profile-image float-start"></img>
        //     </div>
        //     <div className='right-side-of-item col-xl col-lg col-md-7 col-sm'>
        //         <span className='last-message-time'>{props.conversation.time}</span>
        //     </div>
        //     <div className='mid-side-of-item col-xl col-lg col-md col-sm'>
        //         <div className="chat-member-name">{props.conversation.nicknameInChat}</div>
        //         <div className="chat-last-message">{lastMessagePresented}&nbsp;
        //             <i className={iconClassName}></i>
        //         </div>
        //     </div>

        // </div>


    );
}
export default LeftChatItem;
