import './ChatScreen.css';
import './LeftScreen.css';
import './LeftChatItem.css';
import users from '../db/UsersDataBase';
import { useState } from "react";
import LeftChatItem from './LeftChatItem'; import conversations from '../db/Conversations';
;

function LeftScreen({ logInUsername }) {
    var numOfConversations = 0;
    var logInUserImage;
    var jsonObj = {
        '0' : {'title': 'pakainfo.com', 'description': 'pakainfo.com'},
        '1' : {'title': 'infinityknow.com', 'description': 'infinityknow.com'}
      };
    
      var countKey = Object.keys(jsonObj).length;
      console.log(countKey);
    
    console.log(logInUsername)
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

    for(var i = 0; i < Object.keys(chats).length; i++) {
        if(chats[i].users[0].username.localeCompare(logInUsername)==0){
            usernameInChat = chats[i].users[1].username;
        } else {
            usernameInChat = chats[i].users[0].username;
        }
        lastMessage = chats[i].messages[chats[i].messages.length-1].content;
        type = chats[i].messages[chats[i].messages.length-1].type;
        time = chats[i].messages[chats[i].messages.length-1].createdAt;
        image = getUsersChats(usernameInChat).image;
        relevantInfo.push({usernameInChat:usernameInChat, type:type, lastMessage:lastMessage, time:time, image:image});
    }

    // console.log(relevantInfo);
    var conversationsList;
    conversationsList = relevantInfo.map((conversation,key)=> {
        return <LeftChatItem {...conversation} key={key}/>
    });

    return (
        <div className="col-4 leftScreen">
            <div className="topLine topLine-left">
                <span className="bi bi-person-plus-fill add-conversation ms-3"></span>
                <img src={logInUserImage} className="float-start top-profile-image row"></img>

                {/* <img src={logInUserImage} className="top-profile-image top-left-profile-image"></img> */}
                <h5 className='top-left-username'>{logInUsername}</h5>
            </div>
            {conversationsList}
        </div>

    );
}

export default LeftScreen;