import './ChatScreen.css';
import './LeftScreen.css';
import './leftChatItem/LeftChatItem.css';
import users from '../db/UsersDataBase';
import LeftChatItem from './leftChatItem/LeftChatItem';
import conversations from '../db/Conversations';
import { useState, useRef } from "react";
import ChooseNewChat from './ChooseNewChat';
import AddNewChat from './AddNewChat';


function LeftScreen(props,{ logInUsername }) {
    var numOfConversations = 0;
    var jsonObj = {
        '0' : {'title': 'pakainfo.com', 'description': 'pakainfo.com'},
        '1' : {'title': 'infinityknow.com', 'description': 'infinityknow.com'}
      };
      var countKey = Object.keys(jsonObj).length;
      /*console.log(countKey);


    console.log(logInUsername)*/
    function getUsersChats(logInUsername) {
        for (var i = 0; i < Object.keys(users).length; i++) {
            if (users[i].username.localeCompare(logInUsername) === 0) {
                numOfConversations = Object.keys(users[i].chats).length;
                return users[i]
            }
        }
    }

    var chats = getUsersChats(props.logInUsername).chats;

    var relevantInfo = [];
    var usernameInChat = "";
    var lastMessage = "";
    var time = "";
    var image;

    for(var i = 0; i < Object.keys(chats).length; i++) {
        if(chats[i].users[0].username.localeCompare(logInUsername)==0){
            usernameInChat = chats[i].users[1].username;
        } else {
            usernameInChat = chats[i].users[0].username;
        }
        lastMessage = chats[i].messages[chats[i].messages.length-1].content;
        time = chats[i].messages[chats[i].messages.length-1].createdAt;
        image = getUsersChats(usernameInChat).image;
        relevantInfo.push({usernameInChat: {usernameInChat}, lastMessage: {lastMessage}, time: {time}, image: {}});
    }

    // console.log(relevantInfo);
    var conversationsList;
    conversationsList = relevantInfo.map((conversation,key)=> {
        return <LeftChatItem {...conversation} key={key}/>
        // return <LeftChatItem usernameInChat={conversation.usernameInChat} lastMessage={conversation.lastMessage} time={conversation.time} key={key}/>

    });

    //console.log(conversationsList);

    // const conversations = [{chatUsername: "", lastMessage: "", time: ""},{chatUsername: "", lastMessage: "", time: ""}];
    return (
        ///
        <div className="col-4 leftScreen">
        {/*<div className="col-4 leftScreen">*/}
            <div className="topLine topLine-left">
                <span className="bi bi-person-plus-fill add-conversation ms-3"></span>
                {/* <img src={require('../images/userImages/boy-image.png')} className="rounded float-start top-profile-image top-left-profile-image"></img> */}
                <h5 className='top-left-username'>{logInUsername}</h5>
            </div>
            {conversationsList}
        </div>

    );
}

export default LeftScreen;