import React, {useEffect} from 'react';
import '../ChatScreen.css';
import './LeftScreen.css';
import './leftChatItem/LeftChatItem.css';
import LeftChatItem from './leftChatItem/LeftChatItem';
import ChooseNewChat from './ChooseNewChat';
import {getFormattedDateString} from "../Utils";


/**
 * The left side of the chat which holds the list of chats the user is having.
 * @param props include the information of the user currently logged-in, the current chosen
 * conversation, the list of conversations the user is having and a setter to this list.
 */
function LeftScreen(props) {
    // Chats holds all the conversations of the current log-in user.
    var chats = props.user.chats;
    // Keeping the current log-in user's profile image.
    var logInUserImage = props.user.image;
    var relevantInfo = [];


    /*
     * For each conversation the current log-in user is having, we create the information
     * needed to be presented on the left side bar, including the contact's name, his profile picture,
     * the last message has been sent in the conversation and the time it was delivered.
    */
    for (var i = 0; i < Object.keys(chats).length; i++) {
        var usernameInChat = "";
        var nicknameInChat = ""
        var lastMessage = "";
        var message = "";
        var image;
        var type = "";

        // If the username in the conversation information is our log-in username, the other username is the
        // contact's username (same as the contact's nickname and profile image).
        if (chats[i].users[0].username.localeCompare(props.user.username) == 0) {
            usernameInChat = chats[i].users[1].username;
            nicknameInChat = chats[i].users[1].nickname;
            image = chats[i].users[1].image;
        } else {
            usernameInChat = chats[i].users[0].username;
            nicknameInChat = chats[i].users[0].nickname;
            image = chats[i].users[0].image;
        }

        // If there are chats to persent, update their information.
        if ((chats[i].messages.length)) {
            lastMessage = chats[i].messages[chats[i].messages.length - 1].content;
            type = chats[i].messages[chats[i].messages.length - 1].type;
            message = chats[i].messages[chats[i].messages.length - 1];
        }
        relevantInfo.push({ nicknameInChat: nicknameInChat, usernameInChat: usernameInChat, type: type, lastMessage: lastMessage, time: getFormattedDateString(message), image: image });
    }

    // Keeps the list of conversations that the logged-in user is having.
    var conversationsList;
    //TODO - CHECK THE USER SHIR BEFORE DELETING
    // if (Object.keys(chats).length !== 0) {
        
    // Mapping components of LeftChatItem with the relevant information they are needed.
    conversationsList = props.currentListOfChats.map((conversation, index) => {
        return <LeftChatItem conversation={relevantInfo[index]} key={index} chat={chats[index]} refer={props.refer} setChat={props.setChat} />
    });
    return (
        <div className="col-4 leftScreen">
            <div className="topLine">
                <img src={logInUserImage} className="float-start top-left-profile-image"></img>
                {/* <img src={logInUserImage} className="top-profile-image"></img> */}
                <h5 className='top-left-username'>{props.user.username}</h5>
                <button className="bi bi-person-plus-fill add-conversation ms-3" data-bs-toggle="modal" data-bs-target="#add-new-contact"></button>

            </div>
            <div className="container" id="left-chats-container">
                <div className="center-col" id="present-left-chat-items">
                    {conversationsList}
                </div>
            </div>
            <ChooseNewChat logInUsername={props.user.username} conversationsList={conversationsList}

            currentListOfChats={props.currentListOfChats} setCurrentListOfChats={props.setCurrentListOfChats}/>
        </div>
    );
}
export default LeftScreen;