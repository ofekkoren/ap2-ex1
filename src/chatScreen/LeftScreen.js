import './ChatScreen.css';
import './LeftScreen.css';
import './leftChatItem/LeftChatItem.css';
import users from '../db/UsersDataBase';
import LeftChatItem from './leftChatItem/LeftChatItem';
import conversations from '../db/Conversations';
import { useState } from "react";
import ChooseNewChat from './ChooseNewChat';
import AddNewChat from './AddNewChat';


function LeftScreen({ logInUsername }) {
    var numOfConversations = 0;
    var logInUserImage;

    function getUsersChats(logInUsername) {
        for (var i = 0; i < Object.keys(users).length; i++) {
            if (users[i].username.localeCompare(logInUsername) === 0) {
                numOfConversations = Object.keys(users[i].chats).length;
                return users[i];
            }
        }
    }

    var chats = getUsersChats(logInUsername).chats;
    logInUserImage = getUsersChats(logInUsername).image;

    var relevantInfo = [];
    var usernameInChat = "";
    var lastMessage = "";
    var time = "";
    var image;
    var type = "";

    for (var i = 0; i < Object.keys(chats).length; i++) {
        if (chats[i].users[0].username.localeCompare(logInUsername) == 0) {
            usernameInChat = chats[i].users[1].username;
        } else {
            usernameInChat = chats[i].users[0].username;
        }
        lastMessage = chats[i].messages[chats[i].messages.length - 1].content;
        type = chats[i].messages[chats[i].messages.length - 1].type;
        time = chats[i].messages[chats[i].messages.length - 1].createdAt;
        image = getUsersChats(usernameInChat).image;
        relevantInfo.push({usernameInChat: usernameInChat, type: type, lastMessage: lastMessage, time: time, image: image });
    }


    var conversationsList;
    conversationsList = relevantInfo.map((conversation, key) => {
        return <LeftChatItem {...conversation} key={key} />
    });

    // function callChooseNewChat() {
    //     return ChooseNewChat();
    //     // <ChooseNewChat />
    // }
    // console.log(conversationsList);
    return (
        <div className="col-4 leftScreen">
            <div className="topLine topLine-left">
                <button className="bi bi-person-plus-fill add-conversation ms-3"  data-bs-toggle="modal" data-bs-target="#add-new-contact-model"></button>
                {/* <img src={logInUserImage} className="row float-start top-profile-image"></img> */}
                <img src={logInUserImage} className="row float-start profile-image"></img>
                <h5 className='top-left-username'>{logInUsername}</h5>
            </div>
            {conversationsList}
            <ChooseNewChat logInUsername={logInUsername} conversationsList={conversationsList} relevantInfo={relevantInfo}/>
            <AddNewChat usernameInChat="Shir Levi" type="text" lastMessage="hry" time="" image={logInUserImage}/>
        </div>

    );
}

export default LeftScreen;